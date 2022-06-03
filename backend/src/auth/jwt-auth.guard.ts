import {
  CanActivate,
  ExecutionContext,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import type { Request } from 'express';
import type { Observable } from 'rxjs';

import { User } from '../users/user.model';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const token = this.getRequestToken(request);

      if (!token) {
        throw new UnauthorizedException({
          message: 'Unauthorized',
          statusCode: HttpStatus.UNAUTHORIZED,
        });
      }

      const user = this.jwtService.verify<User>(token);
      request.user = user;
    } catch (e) {
      throw new UnauthorizedException({
        message: 'Unauthorized',
        statusCode: HttpStatus.UNAUTHORIZED,
      });
    }

    return true;
  }

  getRequestToken(request: Request) {
    const { authorization } = request.headers;

    if (authorization) {
      const [bearer, token] = authorization.split(' ');

      if (bearer === 'Bearer' && token) {
        return token;
      }
    }

    const { token } = request.cookies;

    if (token) {
      return token;
    }

    return null;
  }
}
