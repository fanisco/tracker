import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './role.model';
import { RoleValue } from './roles.types';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private rolesRepository: typeof Role) {}

  async create(dto: CreateRoleDto) {
    const candidate = await this.getByValue(dto.value);

    if (candidate) {
      throw new HttpException('Role already exists', HttpStatus.BAD_REQUEST);
    }

    const role = this.rolesRepository.create(dto);
    return role;
  }

  async getByValue(value: RoleValue) {
    const role = this.rolesRepository.findOne({ where: { value } });
    return role;
  }
}
