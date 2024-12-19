// blogService.ts
import { redisClient } from '@/lib/redis';
import { Blog } from '@/types/blogs';

/**
 * Save a new blog to Redis.
 * 
 * This function:
 * 1. Adds the blog ID to the "blogs:all" set
 * 2. Stores the blog fields in a hash at key "blog:<id>"
 */
export async function saveBlog(blog: Blog): Promise<void> {
  const { id, title, description, tags, href, timestamp } = blog;

  const pipeline = redisClient.pipeline();

  // Add the blog ID to the blogs:all set
  pipeline.sadd('blog:all', id);

  // Set the blog fields in a hash
  pipeline.hset(`blog:${id}`, {
    title,
    description,
    tags,
    href,
    timestamp: timestamp.toString()
  });

  await pipeline.exec();
}

/**
 * Get all blogs.
 * 
 * This function:
 * 1. Gets all blog IDs from the "blogs:all" set
 * 2. For each blog ID, retrieves the hash and constructs the Blog object
 */
export async function getAllBlogs(): Promise<Blog[]> {
  const blogIds = await redisClient.smembers('blog:all');

  if (blogIds.length === 0) {
    return [];
  }

  // Use pipeline to reduce round trips
  const pipeline = redisClient.pipeline();
  for (const id of blogIds) {
    pipeline.hgetall(`blogs:${id}`);
  }

  const results = await pipeline.exec();
  if (!results) {
    return [];
  }
  // results will be an array like [ [null, blogHash1], [null, blogHash2], ...]

  const blogs: Blog[] = results.map(([err, data], index) => {
    if (err) throw err;
    const id = blogIds[index];
    const blogData = data as Blog;
    return {
      id,
      title: blogData.title,
      description: blogData.description,
      tags: blogData.tags,
      href: blogData.href,
      timestamp: blogData.timestamp
    };
  });

  return blogs;
}

/**
 * Get a single blog by ID.
 * 
 * Returns `null` if the blog does not exist.
 */
export async function getBlogById(id: string): Promise<Blog | null> {
  const data = await redisClient.hgetall(`blog:${id}`);

  if (Object.keys(data).length === 0) {
    // If the hash is empty, the blog does not exist
    return null;
  }

  return {
    id,
    title: data.title,
    description: data.description,
    tags: data.tags.split(','),
    href: data.href,
    timestamp: parseInt(data.timestamp, 10),
  };
}
