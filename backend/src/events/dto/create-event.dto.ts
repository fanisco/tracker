import { IsString, IsDateString } from 'class-validator';

export class CreateEventDto {
  @IsString()
  readonly title: string;

  @IsDateString()
  readonly dateStart: Date;

  @IsDateString()
  readonly dateEnd: Date;
}
