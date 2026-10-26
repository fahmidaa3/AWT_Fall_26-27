import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cause } from './entities/cause.entity';
import { CreateCauseDto } from './dto/create-cause.dto';
 
@Injectable()
export class CauseService {
  constructor(
    @InjectRepository(Cause) private causeRepository: Repository<Cause>,
  ) {}
 
  create(createCauseDto: CreateCauseDto) {
    const cause = this.causeRepository.create(createCauseDto);
    return this.causeRepository.save(cause);
  }
 
  findAll() {
    return this.causeRepository.find();
  }
}