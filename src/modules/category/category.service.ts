import { Injectable } from '@nestjs/common';
import { CreateCategoryDTO } from './dto/CreateCategory.dto';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateCategoryDTO) {
    try {
      const category = await this.prismaService.category.create({
        data,
      });
      return category;
    } catch (error) {
      throw `Erro ao criar categoria: ${error}`;
    }
  }
  async findAll() {
    try {
      const categories = await this.prismaService.category.findMany();
      return categories;
    } catch (error) {
      throw `Erro ao buscar as categorias: ${error}`;
    }
  }

  async findOne(id: number) {
    try {
      const category = await this.prismaService.category.findUnique({
        where: { id },
      });
      if (!category) {
        throw `Categoria com id ${id} não encontrada`;
      }
      return category;
    } catch (error) {
      throw `Erro ao buscar a categoria: ${error}`;
    }
  }
}
