import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export interface Position {
    lat: number;
    lng: number;
}

export type RotaDocument = Rota & Document;

@Schema()
export class Rota {

    @Prop()
    title: string;
    @Prop(raw({ lat: Number, lng: Number }))
    startPosition: Position;
    @Prop(raw({ lat: Number, lng: Number }))
    endPosition: Position;
}

export const RotaSchema = SchemaFactory.createForClass(Rota);