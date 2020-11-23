import { Client } from '../declarations';

import { ActivitySocket } from './activity.socket';

export * from './activity.socket';

export default (client: Client): void => {
    new ActivitySocket(client);
};
