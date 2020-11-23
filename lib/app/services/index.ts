import Ash from '../declarations/application';

export * from './user';
export * from './access';
export * from './refresh';
export * from './client';
export * from './counsellor';

import user from './user';
import access from './access';
import refresh from './refresh';
import client from './client';
import counsellor from './counsellor';

export default (app: Ash): void => {
    app.configure(access);
    app.configure(refresh);
    app.configure(user);
    app.configure(client);
    app.configure(counsellor);
};
