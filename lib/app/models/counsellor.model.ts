import { Model } from '../helpers/model';
import { Schema } from 'mongoose';

export interface CounsellorModel extends Model {
    name: string;
    fsra: string;

    physical: string;
    mobile: string;

    /*
     * We need to keep the account settings on the counsellor model so that the relevant user is able to affect the
     * account...
     *
     * this number must be between 0 and 1...
     * */
    interest: number;
}

export const CounsellorSchema = new Schema<CounsellorModel>(
    {
        name: String,
        fsra: {
            type: String,
            unique: true,
        },
        password: {
            type: String,
        },

        mobile: String,
        interest: {
            type: Number,
            default: 20,
        },

        created: Date,
        updated: Date,
    },
    { collection: 'counsellors' },
);
