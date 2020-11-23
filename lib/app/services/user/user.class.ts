import { UserModel } from '../../models/user.model';
import { UserStore } from '../../store/user.store';

import Ash from '../../declarations/application';
import Service from '../../declarations/service';

export class UserService extends Service<UserModel> {
    constructor(context: Ash) {
        super(context, {
            name: 'users',
            store: 'users',
        });
    }

    public authorize(data: UserModel): Promise<UserModel> {
        if (!data.username) throw Error('Oops, username is required!');

        const settings = this.context.configuration['authorization'];

        return (this.context.query(settings.entity) as UserStore).storage
            .findOne({
                username: data.username,
                password: data.password,
            })
            .then((value: UserModel | null) => {
                if (!value) throw Error('Oops, username or password is incorrect!');

                return value;
            });
    }
}
