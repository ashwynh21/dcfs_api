import Service from '../../declarations/service';
import { ClientModel } from '../../models/client.model';
import Ash from '../../declarations/application';

export class ClientelleService extends Service<ClientModel> {
    constructor(app: Ash) {
        super(app, {
            name: 'clients',
            store: 'clients',
        });
    }
}
