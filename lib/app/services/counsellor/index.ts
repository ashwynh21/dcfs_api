import Ash from '../../declarations/application';
import { CounsellorService } from './counsellor.class';
import { CounsellorModel } from '../../models/counsellor.model';

export default (app: Ash): void => {
    const counsellor = new CounsellorService(app);

    app.apply<CounsellorModel>(counsellor);
};
