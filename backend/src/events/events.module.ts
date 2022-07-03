import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { AuthModule } from '../auth/auth.module';

import { Event } from './event.model';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';

@Module({
  imports: [SequelizeModule.forFeature([Event]), AuthModule],
  controllers: [EventsController],
  providers: [EventsService]
})
export class EventsModule {}
