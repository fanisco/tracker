import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Must be non-empty' })
  @IsEmail({}, { message: 'Incorrect email' })
  readonly email: string;

  @IsString({ message: 'Must be non-empty' })
  @Length(8, 32, { message: 'Password must contain at least 8 characters' })
  readonly password: string;
}
