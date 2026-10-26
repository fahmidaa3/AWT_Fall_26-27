import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CauseService } from './cause.service';
import { CauseController } from './cause.controller';
import { Cause } from './entities/cause.entity';
 
@Module({
  imports: [TypeOrmModule.forFeature([Cause])],
  controllers: [CauseController],
  providers: [CauseService],
})
export class CauseModule {}