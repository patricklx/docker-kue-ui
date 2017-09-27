const kue = require('kue')
const Redis = require('ioredis');

kue.createQueue({
  prefix: process.env.KUE_PREFIX,
  redis: {
    createClientFactory() {
      const redisUrl = process.env.REDIS_URL || 'redis://redis:6379';
      return new Redis({sentinels: [redisUrl]);
    }
  }
})

kue.app.listen(5000)
