import { Injectable } from '@nestjs/common';
import { CreateCategoryDTO } from './dto/CreateCategory.dto';

@Injectable()
export class CategoryService {
  create(createCategoryDto: CreateCategoryDTO) {
    return 'This action adds a new category';
  }
}
