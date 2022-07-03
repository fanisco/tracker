import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { User } from '../users/user.model';

import { CreateEventDto } from './dto/create-event.dto';
import { Event } from './event.model';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(Event) private eventsRepository: typeof Event,
  ) {}

  async create(dto: CreateEventDto, user: User) {
    const event = await this.eventsRepository.create({
      ...dto,
      userId: user.id,
    });
    event.user = user;
    return event;
  }

  async delete(id: number, userId: number) {
    const event = await this.eventsRepository.findOne({
      where: { id, userId },
    });

    if (!event) {
      throw Error('Event is not found.');
    }

    return event.destroy();
  }

  async getAll(user: User) {
    return this.eventsRepository.findAll({ where: { userId: user.id } });
  }
}
