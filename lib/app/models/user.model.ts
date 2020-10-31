import { Schema } from 'mongoose';
import { Model } from '../helpers/model';

export interface UserModel extends Model {
    username: string;
    password: string;
    fullname: string;

    bio?: {
        pin: string;
        marital?: {
            fullname: string;
            pin: string;
            dependents: number;
        };
        physical: string;
        postal: {
            address: string;
            code: string;
        };
        mobile: string;
    };
    employment?: {
        name: string;
        postal: {
            address: string;
            code: string;
        };
    };
    income?: {
        statement: string;
        gross: number;
        deductions: number;
        total: number;
    };
    expenses?: { name: string; amount: number; created: Date; updated: Date }[];
    debt?: {
        name: string;
        account: string;
        outstanding: number;
        monthly: number;
        created: Date;
        updated: Date;
    }[];

    access: Array<string>;
}

export const UserSchema = new Schema<UserModel>(
    {
        username: {
            type: String,
            unique: true,
        },
        fullname: String,
        password: {
            type: String,
        },

        updated: {
            type: Date,
            default: new Date(),
        },
        created: Date,

        access: [String],

        bio: {
            pin: String,
            marital: {
                fullname: String,
                pin: String,
                dependents: Number,
            },
            physical: String,
            postal: {
                address: String,
                code: String,
            },
            mobile: String,
        },
        employment: {
            name: String,
            postal: {
                address: String,
                code: String,
            },
        },
        income: {
            statement: String,
            gross: Number,
            deductions: Number,
            total: Number,
        },
        expenses: [
            {
                name: String,
                amount: Number,
                created: Date,
                updated: Date,
            },
        ],
        debt: [
            {
                name: String,
                account: String,
                outstanding: Number,
                monthly: Number,
                created: Date,
                updated: Date,
            },
        ],
    },
    { collection: 'users' },
);
