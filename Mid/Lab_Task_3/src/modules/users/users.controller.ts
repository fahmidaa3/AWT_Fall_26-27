import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
 
@Controller('users')
export class UsersController {
  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return {
      message: 'Registration successful',
      user: {
        fullName: createUserDto.fullName,
        email: createUserDto.email,
        age: createUserDto.age,
        accountType: createUserDto.accountType,

      },
    };
  }
}