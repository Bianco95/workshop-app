import mongoose, { Document, Schema } from "mongoose";
import { BusinessOwner } from '../models/ businessOwner';
import { Vehicle, VehicleState } from '../vehicles/vehicle';
import { WorkShopManager } from "../manager/workshopManager";

export interface VehicleDocument extends Document{
    
    state: string,
    licensePlate: string,
    brand: string,
    mod: string
}

export const VehicleSchema: Schema = new Schema({

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
    }
    
});
const Vehicle = mongoose.model<VehicleDocument>("Vehicle", VehicleSchema);
export default Vehicle;
