import { Redis } from 'ioredis';

let redis: Redis | null = null;

function getRedisClient() {
  if (!redis) {
    redis = new Redis({
      host: process.env.REDIS_HOST || 'localhost',
      port: parseInt(process.env.REDIS_PORT || '6379', 10),
      // password: process.env.REDIS_PASSWORD,
    });
  }
  return redis;
}

export const redisClient = getRedisClient();
