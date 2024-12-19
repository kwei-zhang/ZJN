import { getBlogById } from '../service';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const id = request.url.split('/').pop();
  if (!id || typeof id !== 'string') {
    return NextResponse.json({ error: 'Blog ID is required' }, { status: 400 });
  }

  const blog = await getBlogById(id);
  if (!blog) {
    return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
  }

  return NextResponse.json(blog);
}