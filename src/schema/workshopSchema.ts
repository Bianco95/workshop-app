import mongoose, { Document, Schema } from "mongoose";
import { VehicleSchema, VehicleDocument } from './vehicleSchema';
import { BusinessSchema, BusinessDocument } from './businessSchema';

export interface WorkshopDocument extends Document{
    name: string,
    businessOwners: BusinessDocument[],
    vehicles: VehicleDocument[]
}

export const WorkshopSchema: Schema = new Schema({
    name:{
        type: String,
        required: true
    },
    businessOwners: {
        type: [BusinessSchema],
        required: true
    },
    vehicles: {
        type: [VehicleSchema],
        required: true
    }

});

const Workshop = mongoose.model<WorkshopDocument>("Workshop", WorkshopSchema);
export default Workshop;
