import { Injectable } from '@nestjs/common';
import { CreateEventDTO } from './dto/CreateEvent.dto';

@Injectable()
export class EventService {
  create(createEventDto: CreateEventDTO) {
    return 'This action adds a new event';
  }

}
