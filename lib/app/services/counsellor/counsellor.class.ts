import Service from '../../declarations/service';
import Ash from '../../declarations/application';
import { CounsellorModel } from '../../models/counsellor.model';

export class CounsellorService extends Service<CounsellorModel> {
    constructor(app: Ash) {
        super(app, {
            name: 'counsellors',
            store: 'counsellors',
        });
    }
}
