import { Controller, Get, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles-auth.decorator';
import { RolesGuard } from '../auth/roles.guard';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  getAll() {
    return this.usersService.getAll();
  }
}
