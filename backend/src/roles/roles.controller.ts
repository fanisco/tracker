import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles-auth.decorator';
import { RolesGuard } from '../auth/roles.guard';

import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';
import { RoleValue } from './roles.types';

@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.rolesService.create(dto);
  }

  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('/:value')
  getByValue(@Param('value') value: RoleValue) {
    return this.rolesService.getByValue(value);
  }
}
