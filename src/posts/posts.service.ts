import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostRepository } from './posts.repository';
import { Post } from './schemas/post.schema';

@Injectable()
export class PostsService {
  constructor(private readonly postRepo: PostRepository) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const newPost = await this.postRepo.create(createPostDto);
    return newPost;
  }

  findAll() {
    return this.postRepo.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
