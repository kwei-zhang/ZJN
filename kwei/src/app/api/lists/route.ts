import { NextResponse } from 'next/server';
import lists from './data/lists.json';

export async function GET() {
  return NextResponse.json(lists);
}
