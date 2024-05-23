import { Injectable } from '@nestjs/common';
import { CreateCategoryDTO } from './dto/CreateCategory.dto';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class CategoryService {

  constructor(private readonly prismaService: PrismaService) {}

  async create (data: CreateCategoryDTO) {
    try {
      const category = await this.prismaService.category.create({
        data
      });
      return category;
    } catch (error) {
      throw `Erro ao criar categoria: ${error}`;
    }
  }
}
