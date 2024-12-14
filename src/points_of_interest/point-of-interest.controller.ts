import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreatePointOfInterestDto } from './dto/create-point-of-interest.dto';
import { PointOfInterestService } from './point-of-interest.service';

@Controller('points_of_interest')
export class PointOfInterestController {
  constructor(private readonly pointOfInterestService: PointOfInterestService) {}

  @Post()
  create(@Body() createPointOfInterestDto: CreatePointOfInterestDto) {
    return this.pointOfInterestService.create(createPointOfInterestDto);
  }
}