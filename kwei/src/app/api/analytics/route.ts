import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";

type AnalyticsData = {
  totalPV: number;
  visitors: Record<string, string>;
};

const analyticsFilePath = path.join(process.cwd(), "data", "analytics.json");

async function ensureAnalyticsFile(): Promise<void> {
  await fs.mkdir(path.dirname(analyticsFilePath), { recursive: true });
  try {
    await fs.access(analyticsFilePath);
  } catch (error: unknown) {
    const defaultData: AnalyticsData = { totalPV: 0, visitors: {} };
    await fs.writeFile(analyticsFilePath, JSON.stringify(defaultData, null, 2), "utf-8");
  }
}

async function readAnalyticsData(): Promise<AnalyticsData> {
  await ensureAnalyticsFile();
  const fileContents = await fs.readFile(analyticsFilePath, "utf-8");
  return JSON.parse(fileContents) as AnalyticsData;
}

async function writeAnalyticsData(data: AnalyticsData): Promise<void> {
  await ensureAnalyticsFile();
  await fs.writeFile(analyticsFilePath, JSON.stringify(data, null, 2), "utf-8");
}

function computeVisitorId(request: Request): string {
  const ipHeader = request.headers.get("x-real-ip") ?? request.headers.get("x-forwarded-for");
  const ip = ipHeader?.split(",")[0]?.trim() ?? "unknown-ip";
  const userAgent = request.headers.get("user-agent") ?? "unknown-ua";
  return crypto.createHash("sha256").update(`${ip}:${userAgent}`).digest("hex");
}

function buildResponse(data: AnalyticsData) {
  return {
    totalPV: data.totalPV,
    totalUV: Object.keys(data.visitors).length,
  };
}

export const dynamic = "force-dynamic";

export async function GET() {
  const analytics = await readAnalyticsData();
  return NextResponse.json(buildResponse(analytics));
}

export async function POST(request: Request) {
  const analytics = await readAnalyticsData();

  const visitorId = computeVisitorId(request);
  const now = new Date();
  const today = now.toISOString().split("T")[0];

  const previousVisitRaw = analytics.visitors[visitorId];
  const previousVisitDate = previousVisitRaw?.split("T")[0];

  if (previousVisitDate !== today) {
    analytics.totalPV += 1;
    analytics.visitors[visitorId] = today;
  }

  await writeAnalyticsData(analytics);
  return NextResponse.json(buildResponse(analytics));
}

