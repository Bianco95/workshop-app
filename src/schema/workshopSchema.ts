import mongoose, { Document, Schema } from "mongoose";
import { BusinessOwner } from '../models/ businessOwner';
import { Vehicle, VehicleState } from '../vehicles/vehicle';
import { WorkShopManager } from "../manager/workshopManager";
import { VehicleSchema, VehicleDocument } from './vehicleSchema';
import { BusinessSchema } from './businessSchema';

export interface WorkshopDocument extends Document{
    name: string,
    businessOwner: BusinessOwner,
    vehicles: VehicleDocument[]
}

export const WorkshopSchema: Schema = new Schema({
    name:{
        type: String,
        required: true
    },
    businessOwner: {
        type: BusinessSchema,
        required: true
    },
    vehicles: {
        type: [VehicleSchema],
        required: true
    }

});

const Workshop = mongoose.model<WorkshopDocument>("Workshop", WorkshopSchema);
export default Workshop;
