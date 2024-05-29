import { Injectable } from '@nestjs/common';
import { CreateEventDTO } from './dto/CreateEvent.dto';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class EventService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateEventDTO) {
    try {
      const event = await this.prismaService.event.create({
        data,
      });
      return event;
    } catch (error) {
      throw `Erro ao criar evento: ${error}`;
    }
  }
  async findAll() {
    try {
      const events = await this.prismaService.event.findMany();
      return events;
    } catch (error) {
      throw `Erro ao buscar eventos: ${error}`;
    }
  }

  async findOne(id: number) {
    try {
      const event = await this.prismaService.event.findUnique({
        where: { id },
      });
      if (!event) {
        throw `Evento com id ${id} não encontrado`;
      }
      return event;
    } catch (error) {
      throw `Erro ao buscar o evento: ${error}`;
    }
  }
}
