import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator";
import { Position } from "../entities/rota.entity";

export class PositionDto implements Position {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    lat: number;
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    lng: number;
}

export class CreateRotaDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    title: string
    @ApiProperty({ example: { lat: 0.4, lng: 0.5 } })
    @ValidateNested({ always: true })
    @IsNotEmpty()
    startPosition: PositionDto
    @ApiProperty({ example: { lat: 0.4, lng: 0.5 } })
    @ValidateNested({ always: true })
    @IsNotEmpty()
    endPosition: PositionDto
}
