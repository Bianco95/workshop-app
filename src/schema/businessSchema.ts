import mongoose, { Document, Schema } from "mongoose";

export interface BusinessDocument extends Document{
    
    username: string,
    name: string,
    surname: string
}

export const BusinessSchema: Schema = new Schema({

    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    }
    
});
const Business = mongoose.model<BusinessDocument>("Business", BusinessSchema);
export default Business;

