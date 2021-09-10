import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';
import { Post, PostDocument } from './schemas/post.schema';

@Injectable()
export class PostRepository {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

  async findAll(): Promise<Post[]> {
    console.log('[PostRepository] findAll');

    return this.postModel.find().exec();
  }

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const newPost = await this.postModel.create(createPostDto);
    return newPost.save();
  }
}
