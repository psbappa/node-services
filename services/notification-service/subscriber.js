import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL);

export default function startSubscriber() {
  redis.subscribe('item-events', (err, count) => {
    if (err) {
      console.error('❌ Redis subscribe failed:', err);
    } else {
      console.log(`✅ Subscribed to ${count} channel(s). Waiting for item events...`);
    }
  });

  redis.on('message', (channel, message) => {
    const event = JSON.parse(message);
    console.log(`🔔 Notification received:`, event);

    // Here, you can extend to send email, push, or log to file
    if (event.type === 'item_created') {
      console.log(`🟢 New item created by ${event.userId}: "${event.name}"`);
    }

    if (event.type === 'item_deleted') {
      console.log(`🔴 Item deleted by ${event.userId}: "${event.itemId}"`);
    }
  });
}
