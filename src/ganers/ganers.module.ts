import { Module } from '@nestjs/common';
import { GanersService } from './ganers.service';
import { GanersController } from './ganers.controller';

@Module({
  controllers: [GanersController],
  providers: [GanersService],
})
export class GanersModule {}
