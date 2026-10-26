import { Controller, Get, Post, Body } from '@nestjs/common';
import { CauseService } from './cause.service';
import { CreateCauseDto } from './dto/create-cause.dto';
 
@Controller('causes')
export class CauseController {
  constructor(private readonly causeService: CauseService) {}
 
  @Post()
  create(@Body() createCauseDto: CreateCauseDto) {
    return this.causeService.create(createCauseDto);
  }
 
  @Get()
  findAll() {
    return this.causeService.findAll();
  }
}