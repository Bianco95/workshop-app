import mongoose, { Document, Schema } from "mongoose";
import { BusinessOwner } from '../models/ businessOwner';
import { Vehicle, VehicleState } from '../vehicles/vehicle';
import { WorkShopManager } from "../manager/workshopManager";
import { VehicleDocument } from './vehicleSchema';
import { ChangeWheel } from '../vehicles/operationStrategies/changewheel';

export interface CarDocument extends Document, VehicleDocument{
    
    steeringWheel: string,
    wheels:string[],
    strategies: ChangeWheel
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
