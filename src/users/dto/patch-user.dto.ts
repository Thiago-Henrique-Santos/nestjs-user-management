import { ApiProperty } from "@nestjs/swagger";

export class PatchUserDto {
  @ApiProperty({ required: false })
  name?: string;

  @ApiProperty({ required: false })
  email?: string;

  @ApiProperty({ required: false })
  password?: string;
}