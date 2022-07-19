import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../users/user.model';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(userDto: CreateUserDto) {
    const user = await this.validateUser(userDto);
    return this.generateToken(user);
  }

  async registration(dto: CreateUserDto) {
    const candidate = await this.usersService.getByEmail(dto.email);
    if (candidate) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const hashPassword = await bcrypt.hash(dto.password, 5);
    const user = await this.usersService.create({
      ...dto,
      password: hashPassword,
    });

    return this.generateToken(user);
  }

  private generateToken(user: User) {
    const payload = {
      id: user.id,
      email: user.email,
      roles: user.roles.map((role) => role.value),
    };

    const token = this.jwtService.sign(payload);
    const decoded = this.jwtService.decode(token) as Record<string, any>;
    const expires = new Date(decoded.exp * 1000);

    return {
      token,
      expires,
    };
  }

  private async validateUser(dto: CreateUserDto) {
    const user = await this.usersService.getByEmail(dto.email);

    if (!user) {
      throw new UnauthorizedException({
        message: 'Email or password is incorrect.',
        statusCode: HttpStatus.UNAUTHORIZED,
      });
    }

    const passwordEquals = await bcrypt.compare(dto.password, user.password);

    if (!passwordEquals) {
      // https://stackoverflow.com/questions/32752578/whats-the-appropriate-http-status-code-to-return-if-a-user-tries-logging-in-wit
      throw new UnauthorizedException({
        message: 'Email or password is incorrect.',
        statusCode: HttpStatus.UNAUTHORIZED,
      });
    }

    return user;
  }
}
