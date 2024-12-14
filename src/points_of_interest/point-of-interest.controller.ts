import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { CreatePointOfInterestDto } from './dto/create-point-of-interest.dto';
import { PointOfInterestService } from './point-of-interest.service';

@Controller('points_of_interest')
export class PointOfInterestController {
  constructor(private readonly pointOfInterestService: PointOfInterestService) {}

  @Get()
  async findAll() {
    return this.pointOfInterestService.getAllLocations();
  }

  @Post()
  create(@Body() createPointOfInterestDto: CreatePointOfInterestDto) {
    return this.pointOfInterestService.create(createPointOfInterestDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<string> {
    await this.pointOfInterestService.deletePointOfInterest(id);
    return `Point of Interest with ID ${id} deleted successfully.`;
  }
}