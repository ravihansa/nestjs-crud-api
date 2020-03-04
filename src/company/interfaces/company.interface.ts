import { Document } from 'mongoose';


export interface Company extends Document {
    readonly name: string;
    readonly email: string;
    readonly logoPath: string;
    readonly webSite: string;
    readonly createdAt: Date;
}
