const kue = require('kue')
const Redis = require('ioredis');

kue.createQueue({
  prefix: process.env.KUE_PREFIX,
  redis: {
    createClientFactory() {
      return new Redis({
        sentinels: [{host: process.env.REDIS_HOST, port: process.env.REDIS_PORT}], 
        name: process.env.REDIS_MASTER || 'mymaster'
      });
    }
  }
})

kue.app.listen(5000)
