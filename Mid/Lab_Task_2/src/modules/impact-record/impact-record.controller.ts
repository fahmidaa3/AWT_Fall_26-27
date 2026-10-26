import { Controller, Get, Post, Body } from '@nestjs/common';
import { ImpactRecordService } from './impact-record.service';
import { CreateImpactRecordDto } from './dto/create-impact-record.dto';
 
@Controller('impact-records')
export class ImpactRecordController {
  constructor(private readonly impactRecordService: ImpactRecordService) {}
 
  @Post()
  create(@Body() createImpactRecordDto: CreateImpactRecordDto) {
    return this.impactRecordService.create(createImpactRecordDto);
  }
 
  @Get()
  findAll() {
    return this.impactRecordService.findAll();
  }
}