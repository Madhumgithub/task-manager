import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './tasks/task.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Ensure ConfigModule is loaded first
    MongooseModule.forRoot(process.env.MONGO_URI || ''), // Add fallback empty string
    TaskModule,
  ],
})
export class AppModule {}
