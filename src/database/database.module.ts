import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://user:password@mongo:27017/admin', {
      useNewUrlParser: true,
    }),
  ],
})
export class DatabaseModule {}
