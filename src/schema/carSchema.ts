import mongoose, { Document, Schema } from "mongoose";
import { BusinessOwner } from '../models/ businessOwner';
import { Vehicle, VehicleState } from '../vehicles/vehicle';
import { WorkShopManager } from "../manager/workshopManager";

export interface CarDocument extends Document{
    
    state: string,
    licensePlate: string,
    brand: string,
    mod: string,
    steeringWheel: string,
    wheels:string[]
    
}

export const CarSchema: Schema = new Schema({

    state: {
        type: String,
        required: true
    },
    licensePlate: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    mod:{
        type: String,
        required: true
    },
    steeringWheel:{
        type: String,
        required: true
    },
    wheels:{
        type: [String],
        required: true
    }
    
});
const Car = mongoose.model<CarDocument>("Car", CarSchema);
export default Car;
