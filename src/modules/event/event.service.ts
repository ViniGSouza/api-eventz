import { Injectable } from '@nestjs/common';
import { CreateEventDTO } from './dto/CreateEvent.dto';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class EventService {
  create(createEventDto: CreateEventDTO) {
    return 'This action adds a new event';
  }

  constructor(private readonly prismaService: PrismaService) {}

  async createEvent({
    name,
    companyId,
    categoryId,
    description,
    imageUrl,
    price,
    discount,
  }: CreateEventDTO) {
    const event = await this.prismaService.event.create({
      data: {
        name,
        companyId,
        categoryId,
        description,
        imageUrl,
        price,
        discount,
      },
    });
    return event;
  }
}
