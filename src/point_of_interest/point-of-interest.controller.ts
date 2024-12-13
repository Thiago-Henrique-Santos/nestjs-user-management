import { Controller, Post, Body } from '@nestjs/common';
import { CreatePointOfInterestDto } from './dto/create-point-of-interest.dto';
import { PointOfInterest } from './point-of-interest.entity';
import { PointOfInterestService } from './point-of-interest.service';

@Controller('points-of-interest')
export class PointOfInterestController {
  constructor(private readonly pointOfInterestService: PointOfInterestService) {}

  @Post()
  async create(@Body() createPointOfInterestDto: CreatePointOfInterestDto): Promise<PointOfInterest> {
    const { name, latitude, longitude, category } = createPointOfInterestDto;

    // Convertendo as coordenadas para o tipo geography do PostGIS
    const location = `POINT(${longitude} ${latitude})`;

    return await this.pointOfInterestService.create({
      name,
      category,
      location,
    });
  }
}