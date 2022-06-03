import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';

import { Role } from '../roles/role.model';
import { UserRoles } from '../roles/user-roles.model';

@Table({ tableName: 'users' })
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}
