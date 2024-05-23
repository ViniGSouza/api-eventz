import { Injectable } from '@nestjs/common';
import { CreateEventDTO } from './dto/CreateEvent.dto';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class EventService {

  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateEventDTO) {
    try {
      const event = await this.prismaService.event.create({
        data
      });
      return event;
    } catch (error) {
      throw `Erro ao criar evento: ${error}`;
    }
  }
}
