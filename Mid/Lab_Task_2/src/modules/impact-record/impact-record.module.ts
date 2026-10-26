import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImpactRecordService } from './impact-record.service';
import { ImpactRecordController } from './impact-record.controller';
import { ImpactRecord } from './entities/impact-record.entity';
 
@Module({
  imports: [TypeOrmModule.forFeature([ImpactRecord])],
  controllers: [ImpactRecordController],
  providers: [ImpactRecordService],
})
export class ImpactRecordModule {}