import {
  Body,
  Controller,
  Delete,
  Get, 
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';

import { User } from '../users/user.model';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

import { CreateEventDto } from './dto/create-event.dto';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreateEventDto, @Request() req: { user: User }) {
    return this.eventsService.create(dto, req.user);
  }
  
  @UseGuards(JwtAuthGuard)
  @Delete()
  delete(@Body('id') id: number, @Request() req: { user: User }) {
    return this.eventsService.delete(id, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getAll(@Request() req: { user: User }) {
    return this.eventsService.getAll(req.user);
  }
}
