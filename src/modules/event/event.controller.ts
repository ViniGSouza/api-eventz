import { Controller, Post, Body} from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDTO } from './dto/CreateEvent.dto';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  create(@Body() createEventDto: CreateEventDTO) {
    return this.eventService.create(createEventDto);
  }

}
