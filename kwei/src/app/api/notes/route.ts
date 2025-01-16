import { NextResponse } from 'next/server';
import notes from './data/Notes.json';

export async function GET() {
  try {
    return NextResponse.json({ notes });
  } catch (error) {
    console.error('Error reading notes:', error);
    return NextResponse.json(
      { error: 'Failed to fetch notes' },
      { status: 500 }
    );
  }
}
