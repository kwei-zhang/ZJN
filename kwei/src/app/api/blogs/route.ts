import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  try {
    // get from blogs.json and parse it
    const blogsJson = await fs.readFile(path.join(process.cwd(), 'src/app/api/blogs/contents/blogs.json'), 'utf8');
    const blogs = JSON.parse(blogsJson);
    return NextResponse.json(blogs);
  } 
  catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    )
  }
}