import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = Post & Document;

export class Post {
  @Prop({ required: true })
  title: String;
  @Prop({ required: true })
  description: String;
  @Prop({ required: true })
  body: String;
  @Prop({ required: true })
  author: String;
  date_posted: String;
}

export const PostSchema = SchemaFactory.createForClass(Post);
