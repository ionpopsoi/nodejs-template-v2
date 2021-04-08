import { Router } from 'express';
import ChallengeServices from '../services/ChallengeServices';


class InternalRouter {
    public init() {
        const router = Router();


        //SEND CHALLENGE TO PHONE
        router.post('/2fa/challenge', async (req: any, res: any) => {
            return await ChallengeServices().CreateChallenge(req.body.ClientId
                , req.body.Phone
                , req.body.PhoneExtension
                , req.body.CustomToken
                , req.body.TokenRule
            );
        });

        //VERIFY CHALLENGE STATUS
        router.get('/2fa/challenge/verify', (req: any, res: any) => {

        })
    }
}

export default () => {
    return new InternalRouter();
}