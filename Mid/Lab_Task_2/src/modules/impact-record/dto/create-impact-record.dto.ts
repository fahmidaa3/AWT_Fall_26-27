import { IsNotEmpty, IsString } from 'class-validator';
 
export class CreateImpactRecordDto {
  @IsNotEmpty()
  @IsString()
  title!: string;
 
  @IsNotEmpty()
  @IsString()
  sourceType!: string;
}