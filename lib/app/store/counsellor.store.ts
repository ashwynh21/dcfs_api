import Store from '../declarations/store';
import { CounsellorModel, CounsellorSchema } from '../models/counsellor.model';
import Ash from '../declarations/application';
import * as mongoose from 'mongoose';

export class CounsellorStore extends Store<CounsellorModel> {
    constructor(app: Ash) {
        super(app, {
            name: 'counsellors',
            storage: CounsellorSchema,
        });
    }

    protected oninit(): void {
        /*
         * */
    }

    protected onmodel(schema: mongoose.Schema<CounsellorModel>): void {
        /*
         * */
    }

    protected onready(): void {
        /*
         * */
    }
}
