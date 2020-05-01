import mongoose, { Document, Schema } from "mongoose";

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
    },
    wheels:{
        type: [String],
        required: false
    },
    steeringWheel:{
        type: String,
        required: false
    },
    strategies:{
        type: [String],
        required:false
    }
    
});
const Vehicle = mongoose.model<VehicleDocument>("Vehicle", VehicleSchema);
export default Vehicle;
