import dotenv from 'dotenv';
import startSubscriber from './subscriber.js';

dotenv.config();

console.log('🔔 Notification service starting...');
startSubscriber();
