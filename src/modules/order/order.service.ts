import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class OrderService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateOrderDto) {
    try {
      const order = await this.prismaService.order.create({
        data,
      });
      return order;
    } catch (error) {
      throw `Erro ao criar uma ordem: ${error}`;
    }
  }

  async findAll() {
    try {
      const orders = await this.prismaService.order.findMany();
      return orders;
    } catch (error) {
      throw `Erro ao buscar as ordens: ${error}`;
    }
  }

  async findOne(id: string) {
    try {
      const order = await this.prismaService.order.findUnique({
        where: { id },
      });
      return order;
    } catch (error) {
      throw `Erro ao buscar a ordem: ${error}`;
    }
  }
}
