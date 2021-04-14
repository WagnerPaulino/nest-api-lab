import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRotaDto } from './dto/create-rota.dto';
import { UpdateRotaDto } from './dto/update-rota.dto';
import { Rota, RotaDocument } from './entities/rota.entity';

@Injectable()
export class RotaService {

  constructor(@InjectModel(Rota.name) private rotaModel: Model<RotaDocument>) { }

  create(createRotaDto: CreateRotaDto) {
    return this.rotaModel.create(createRotaDto);
  }

  findAll() {
    return this.rotaModel.find().exec();
  }

  findOne(id: string) {
    return this.rotaModel.findById(id).exec();
  }

  async update(id: string, updateRotaDto: UpdateRotaDto) {
    await this.rotaModel.updateOne({ _id: id }, updateRotaDto).exec();
    return this.findOne(id);
  }

  remove(id: string) {
    this.rotaModel.deleteOne({ _id: id })
  }
}
