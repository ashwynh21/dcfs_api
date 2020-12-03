import Store from '../declarations/store';
import Ash from '../declarations/application';

import { ClientModel, ClientSchema } from '../models/client.model';

import mongoose from 'mongoose';
import { ActivitySocket } from '../sockets';
import { Client } from '../declarations';

export class ClientStore extends Store<ClientModel> {
    constructor(app: Ash) {
        super(app, {
            name: 'clients',
            storage: ClientSchema,
        });
    }

    protected oninit(): void {
        /*
         * */
    }

    protected onmodel(schema: mongoose.Schema): void {
        /*
         * */
    }

    protected onready(): void {
        /*
         * */
    }

    async create(data: ClientModel): Promise<ClientModel> {
        return super.create(data).then(async (client) => {
            const clients = Object.entries(this.context.io.sockets.sockets as { [id: string]: Client }).filter(
                async ([, socket]) => {
                    return await this.context.authenticate(socket.meta);
                },
            );
            clients.forEach(([, socket]) => {
                socket.fetch<ActivitySocket>('activity').push({
                    data,
                    model: 'client',
                });
            });

            return client;
        });
    }
}
