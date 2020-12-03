import { Schema, Types } from 'mongoose';
import { Model } from '../helpers/model';

export interface UserModel extends Model {
    username: string;
    password: string;
    fullname: string;

    counsellor: string;

    access: Array<string>;
}

export const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
        },
        password: String,
        fullname: String,

        counsellor: {
            type: Types.ObjectId,
            ref: 'counsellors',
        },

        access: [String],

        created: Date,
        updated: Date,
    },
    { collection: 'users' },
);
