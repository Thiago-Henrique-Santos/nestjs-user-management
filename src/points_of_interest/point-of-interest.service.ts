import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PointOfInterest } from './point-of-interest.entity';
import { CreatePointOfInterestDto } from './dto/create-point-of-interest.dto';

@Injectable()
export class PointOfInterestService {
  constructor(
    @InjectRepository(PointOfInterest)
    private pointOfInterestRepository: Repository<PointOfInterest>,
  ) {}

  async getAllLocations(): Promise<PointOfInterest[]> {
    return this.pointOfInterestRepository.find();
  }

  async getPointOfInterestById(id: number): Promise<PointOfInterest> {
    const point = await this.pointOfInterestRepository.findOneBy({ id });
    if (!point) {
      throw new NotFoundException(`Point of Interest with ID ${id} not found.`);
    }
    return point;
  }

  async create(createPointOfInterestDto: CreatePointOfInterestDto): Promise<PointOfInterest> {
    const { name, category, latitude, longitude } = createPointOfInterestDto;
  
    await this.pointOfInterestRepository.query(
      `INSERT INTO points_of_interest (name, category, location)
       VALUES ($1, $2, ST_SetSRID(ST_MakePoint($3, $4), 4326))`,
      [name, category, longitude, latitude]
    );
  
    const [newPoint] = await this.pointOfInterestRepository.query(
      `SELECT id, name, category, ST_AsText(location) as location, created_at
       FROM points_of_interest
       WHERE name = $1 AND category = $2
       ORDER BY created_at DESC
       LIMIT 1`,
      [name, category]
    );
  
    return newPoint;
  }

  async deletePointOfInterest(id: number): Promise<void> {
    const result = await this.pointOfInterestRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Point of Interest with ID ${id} not found.`);
    }
  }
}