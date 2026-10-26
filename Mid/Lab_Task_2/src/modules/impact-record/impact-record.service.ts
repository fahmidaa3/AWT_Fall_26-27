import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ImpactRecord } from './entities/impact-record.entity';
import { CreateImpactRecordDto } from './dto/create-impact-record.dto';
 
@Injectable()
export class ImpactRecordService {
  constructor(
    @InjectRepository(ImpactRecord) private impactRecordRepository: Repository<ImpactRecord>,
  ) {}
 
  create(createImpactRecordDto: CreateImpactRecordDto) {
    const record = this.impactRecordRepository.create(createImpactRecordDto);
    return this.impactRecordRepository.save(record);
  }
 
  findAll() {
    return this.impactRecordRepository.find();
  }
}