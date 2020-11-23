import { UserStore } from './user.store';
import { ClientStore } from './client.store';
import { CounsellorStore } from './counsellor.store';

import { UserModel } from '../models/user.model';
import { ClientModel } from '../models/client.model';
import { CounsellorModel } from '../models/counsellor.model';

import Ash from '../declarations/application';

export default (app: Ash): void => {
    app.commit<UserModel>(new UserStore(app));
    app.commit<ClientModel>(new ClientStore(app));
    app.commit<CounsellorModel>(new CounsellorStore(app));
};
