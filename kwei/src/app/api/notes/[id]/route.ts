/* eslint-disable @typescript-eslint/ban-ts-comment */

import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const filePath = path.join(process.cwd(), 'src', 'app', 'api', 'notes', 'data', `${id}.md`);
    
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      return NextResponse.json({ content });
    } catch (fileError) {
      console.error('Error reading note file:', fileError);
      return NextResponse.json(
        { error: 'Note not found' },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
