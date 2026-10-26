import { PartialType } from '@nestjs/swagger';
import { CreateImpactRecordDto } from './create-impact-record.dto';

export class UpdateImpactRecordDto extends PartialType(CreateImpactRecordDto) {}
