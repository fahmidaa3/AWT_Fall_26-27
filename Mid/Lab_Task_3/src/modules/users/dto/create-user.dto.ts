import { 
  IsString, 
  MinLength, 
  IsEmail, 
  IsStrongPassword, 
  IsInt, 
  Min, 
  Max, 
  Matches, 
  IsIn, 
  IsOptional 
} from 'class-validator';
import { Type } from 'class-transformer';
 
export class CreateUserDto {
  @IsString()
  @MinLength(3)
  fullName!: string;
 
  @IsEmail()
  email!: string;
 
  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  password!: string;
 
  @Type(() => Number)
  @IsInt()
  @Min(18)
  @Max(60)
  age!: number;
 
  @IsString()
  @Matches(/^01\d{9}$/, { message: 'Phone must be exactly 11 digits and start with 01' })
  phone!: string;
 
  @IsIn(['student', 'teacher'])
  accountType!: string;
 
  @IsOptional()
  @IsString()
  @MinLength(10)
  address?: string;
}