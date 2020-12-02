import { CounsellorModel } from '../../models/counsellor.model';
import { CounsellorService } from './counsellor.class';
import { Microservices } from '../../declarations';
import { ClientModel } from '../../models/client.model';

export default (counsellor: CounsellorService): Microservices<CounsellorModel> => ({
    emails: {
        method: 'post',
        message: 'Hi, here is your access token!',
        error: 'Oops, incorrect username or password!',

        /*
        With the authentication function defined and established we can now define functions that allow the requesting
        user to get access tokens as well as refresh tokens.
         */
        callback: (data: CounsellorModel) =>
            counsellor.sendmail(
                data as CounsellorModel & {
                    emails: Array<{ email: string; name: string }>;
                    file: string;
                    client: ClientModel;
                    counsellor: CounsellorModel;
                },
            ),
    },
});
