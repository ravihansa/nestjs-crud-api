import { Schema } from 'mongoose';

export const CompanySchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: 'name can\'t be empty'
    },
    email: {
        type: String,
        unique: true
    },
    logoPath: {
        type: String,
        default: null
    },
    webSite: {
        type: String,
        default: null
    },
    createdAt: {
        type: Date, default: Date.now
    }
});
