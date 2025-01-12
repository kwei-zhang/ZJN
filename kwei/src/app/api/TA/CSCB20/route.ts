import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

// http://localhost:3000/api/TA/CSCB20?week=1
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const week = searchParams.get('week');
    
    if (!week) {
      return NextResponse.json(
        { error: 'Week parameter is required' },
        { status: 400 }
      );
    }

    const filePath = path.join(process.cwd(), 'src', 'app', 'api', 'TA', 'CSCB20', `Tutorial Week ${week}.pdf`);
    
    try {
      const file = await fs.readFile(filePath);
      
      return new NextResponse(file, {
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': `attachment; filename="Tutorial Week ${week}.pdf"`,
        },
      });
    } catch (fileError) {
      return NextResponse.json(
        { error: 'PDF file not found' },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}