import { ApiProperty } from '@nestjs/swagger';

export class CreatePointOfInterestDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  latitude: number;

  @ApiProperty()
  longitude: number;

  @ApiProperty({ required: false })
  category?: string;
}