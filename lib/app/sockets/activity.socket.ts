/*
 * In this class we will be required to create a class that will be used to interact with the entire API. The API will
 * be running data related activity...what we want to achieve is the ability to push data changes through a fixed socket
 * channel that authenticated users will be able to pick up on...
 *
 * The socket channel should sub divide itself in order to send the correct activity to the correct user...
 *
 * */

import Socket, { Client } from '../declarations/socket';
import { Model } from '../helpers/model';

export class ActivitySocket extends Socket {
    constructor(client: Client) {
        super(client, {
            name: 'activity',
        });
    }

    protected async onready(): Promise<void> {
        return Promise.resolve(undefined);
    }

    /*
     * Recall that this class will need to wrap its way around the class involved in the storage features of the API
     * we also need to make sure that the function call is clean...
     *
     * We will also need to configure a structure to define a way for a front application to display and structure
     * UI components...
     *
     * We also need to note that this function will only be called when the create, update and delete requests are made
     *
     * */
    public push<T extends Model>(data: ComponentStructure<T>): void {
        this.emit('read', {
            data,
        });
    }
}

export interface ComponentStructure<T extends Model> {
    model: string;
    data: T;
}
