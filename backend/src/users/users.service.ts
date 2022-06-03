import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Role } from '../roles/role.model';
import { RolesService } from '../roles/roles.service';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private usersRepository: typeof User,
    private rolesService: RolesService,
  ) {}

  async create(dto: CreateUserDto) {
    const user = await this.usersRepository.create({ ...dto });
    const role = await this.rolesService.getByValue('VISITOR');
    await user.$set('roles', [role.id]);
    user.roles = [role];
    return user;
  }

  async getAll() {
    const users = await this.usersRepository.findAll();
    return users;
  }

  getByEmail(email: string) {
    return this.usersRepository.findOne({
      where: { email },
      include: Role,
    });
  }
}
