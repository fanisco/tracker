import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { AuthModule } from '../auth/auth.module';

import { Role } from './role.model';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { UserRoles } from './user-roles.model';

@Module({
  exports: [RolesService],
  imports: [SequelizeModule.forFeature([Role, UserRoles]), AuthModule],
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}
