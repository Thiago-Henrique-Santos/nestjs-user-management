import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PointOfInterestController } from './point-of-interest.controller';
import { PointOfInterestService } from './point-of-interest.service';
import { PointOfInterest } from './point-of-interest.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PointOfInterest])],
  providers: [PointOfInterestService],
  controllers: [PointOfInterestController]
})
export class PointOfInterestModule {}