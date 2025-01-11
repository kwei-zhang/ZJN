import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request: Request) {
  const id = request.url.split('/').pop();
  
  if (!id || typeof id !== 'string') {
    return NextResponse.json({ error: 'Blog ID is required' }, { status: 400 });
  }

  try {
    const filePath = path.join(process.cwd(), 'src/app/api/blogs/contents', `${id}.md`);
    const content = await fs.readFile(filePath, 'utf8');
    
    return NextResponse.json({ 
      id,
      content 
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Blog not found' },
      { status: 404 }
    );
  }
}