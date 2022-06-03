import { Body, Controller, Post, Res } from '@nestjs/common';
import type { Response } from 'express';

import { CreateUserDto } from '../users/dto/create-user.dto';

import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async login(
    @Body() dto: CreateUserDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { token } = await this.authService.login(dto);

    response.cookie('token', token, { httpOnly: true });
    return { token };
  }

  @Post('/registration')
  async registration(
    @Body() dto: CreateUserDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { token } = await this.authService.registration(dto);

    response.cookie('token', token, { httpOnly: true, sameSite: 'strict' });
    return { token };
  }
}
