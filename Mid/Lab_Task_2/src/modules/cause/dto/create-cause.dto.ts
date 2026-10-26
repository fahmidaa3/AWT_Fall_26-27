import { IsNotEmpty, IsString } from 'class-validator';
 
export class CreateCauseDto {
  @IsNotEmpty()
  @IsString()
  name!: string;
}