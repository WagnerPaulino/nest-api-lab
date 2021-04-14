import { Module } from '@nestjs/common';
import { RotaService } from './rota.service';
import { RotaController } from './rota.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Rota, RotaSchema } from './entities/rota.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Rota.name, schema: RotaSchema }])],
  controllers: [RotaController],
  providers: [RotaService]
})
export class RotaModule { }
