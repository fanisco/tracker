import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { User } from '../users/user.model';
import { ROLES_KEY } from './roles-auth.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const requiredRoles = this.reflector.getAllAndOverride<string[]>(
        ROLES_KEY,
        [context.getHandler(), context.getClass()],
      );
      if (!requiredRoles) {
        return true;
      }

      const user: User = context.switchToHttp().getRequest().user;
      return user.roles.some((role) => requiredRoles.includes(role.value));
    } catch (e) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }
}
