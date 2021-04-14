import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RotaModule } from './rota/rota.module';

@Module({
  imports: [RotaModule, MongooseModule.forRoot('mongodb://admin:admin@localhost:27017/nest?authSource=admin', { useNewUrlParser: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
