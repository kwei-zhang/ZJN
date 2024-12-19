import { redisClient } from '@/lib/redis';
import { NextResponse } from 'next/server';
import { getAllBlogs, saveBlog } from './service';

export async function GET() {
  try {
    return NextResponse.json(await getAllBlogs())
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const id = await saveBlog(body)

    return NextResponse.json({ id, ...body }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create blog' },
      { status: 500 }
    )
  }
}