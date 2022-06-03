import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';

import { User } from '../users/user.model';

import { RoleValue } from './roles.types';
import { UserRoles } from './user-roles.model';

@Table({ tableName: 'roles' })
export class Role extends Model<Role> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value: RoleValue;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
