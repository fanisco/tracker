import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { RolesModule } from '../roles/roles.module';
import { AuthModule } from '../auth/auth.module';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.model';

@Module({
  exports: [UsersService],
  imports: [SequelizeModule.forFeature([User]), RolesModule, forwardRef(() => AuthModule)],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
