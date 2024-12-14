import { ApiProperty } from "@nestjs/swagger";

export class CreatePointOfInterestDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    category?: string;

    @ApiProperty()
    latitude: number;

    @ApiProperty()
    longitude: number;
  }