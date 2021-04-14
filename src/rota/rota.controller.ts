import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { RotaService } from './rota.service';
import { CreateRotaDto } from './dto/create-rota.dto';
import { UpdateRotaDto } from './dto/update-rota.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('rotas')
@ApiTags('rotas')
export class RotaController {
  constructor(private readonly rotaService: RotaService) { }

  @Post()
  create(@Body() createRotaDto: CreateRotaDto) {
    return this.rotaService.create(createRotaDto);
  }

  @Get()
  findAll() {
    return this.rotaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rotaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRotaDto: UpdateRotaDto) {
    return this.rotaService.update(id, updateRotaDto);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rotaService.remove(id);
  }
}
