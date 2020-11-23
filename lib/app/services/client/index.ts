import { ClientelleService } from './client.class';
import { ClientModel } from '../../models/client.model';

import Ash from '../../declarations/application';

export default (app: Ash): void => {
    const client = new ClientelleService(app);

    app.apply<ClientModel>(client);
};
