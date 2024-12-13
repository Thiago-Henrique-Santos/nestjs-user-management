import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PointOfInterest } from './point-of-interest.entity';

@Injectable()
export class PointOfInterestService {
  constructor(
    @InjectRepository(PointOfInterest)
    private readonly pointOfInterestRepository: Repository<PointOfInterest>,
  ) {}

  async create(data: { name: string; category?: string; location: string }): Promise<PointOfInterest> {
    const pointOfInterest = this.pointOfInterestRepository.create(data);
    return this.pointOfInterestRepository.save(pointOfInterest);
  }
}