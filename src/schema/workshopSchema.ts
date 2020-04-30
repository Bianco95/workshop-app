import mongoose, { Document, Schema } from "mongoose";
import { BusinessOwner } from '../models/ businessOwner';
import { Vehicle, VehicleState } from '../vehicles/vehicle';
import { WorkShopManager } from "../manager/workshopManager";
import { VehicleSchema } from './vehicleSchema';
import { BusinessSchema } from './businessSchema';

export interface WorkshopDocument extends Document{
    id: string,
    name: string,
    businessOwner: BusinessOwner,
    vehicles: Vehicle[]
}

export const WorkshopSchema: Schema = new Schema({
    id:{
        type: String,
        required: true
    },
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




















var schema = new Schema({
    name:    String,
    binary:  Buffer,
    living:  Boolean,
    updated: { type: Date, default: Date.now },
    age:     { type: Number, min: 18, max: 65 },
    mixed:   Schema.Types.Mixed,
    _someId: Schema.Types.ObjectId,
    decimal: Schema.Types.Decimal128,
    array: [],
    ofString: [String],
    ofNumber: [Number],
    ofDates: [Date],
    ofBuffer: [Buffer],
    ofBoolean: [Boolean],
    ofMixed: [Schema.Types.Mixed],
    ofObjectId: [Schema.Types.ObjectId],
    ofArrays: [[]],
    ofArrayOfNumbers: [[Number]],
    nested: {
      stuff: { type: String, lowercase: true, trim: true }
    },
    map: Map,
    mapOfString: {
      type: Map,
      of: String
    }
  })








