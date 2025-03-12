import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  Logger.log('Server is running on http://localhost:3000');

  mongoose.connection.once('open', () => {
    Logger.log('✅ Connected to MongoDB');
  });

  mongoose.connection.on('error', (err) => {
    Logger.error('❌ MongoDB connection error:', err);
  });
}
bootstrap();
