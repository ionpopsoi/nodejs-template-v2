import { v4 as uuidv4 } from 'uuid';
import { PrismaClient } from '@prisma/client'


import { ChallengeResponse, ChallengeStatus } from './ChallengeTypes';


const prisma = new PrismaClient();

class ChallengeServices {

    /**
     * Create a challenge
     * @param ClientId 
     * @param Phone 
     * @returns 
     */
    public async CreateChallenge(ClientId: Int32Array, Phone: Int32Array, PhoneExtension: String, CustomToken?: string, TokenRule: TokenType): Promise<ChallengeResponse> {
        //create challenge UID
        var challengeUid = uuidv4();

        //validade if phone extension is suported
        //TODO: Convert to a list of phone extensions
        if (PhoneExtension != "+351") return { Status: ChallengeStatus.ERROR, Uid: challengeUid, ErrorMessage: "Phone extension not suported, please contact suporte." }

        //generate TOKEN IF DOESNT EXIST
        if (CustomToken == null) {
            if (TokenRule == null) this.GenerateToken(TokenType.SECURE, CustomToken);
        }

        // Insert Into Challenge
        await prisma.tb_Challenges.create({
            data: {
                UId: challengeUid,
                Client: ClientId.toString(),
                Phone: Phone.toString()
            }
        });

        //IMPLEMENT API SENDING MESSAGE
        this.SendSMSToPhone(Phone);

        var response: ChallengeResponse = {
            Status: ChallengeStatus.SUCCESS,
            Uid: challengeUid
        }

        return response;
    }

    /**
     * Send SMS To Phone INVOKES EXTERNAL API
    * @param Phone Phone Number to Send the token
     */
    private async SendSMSToPhone(Phone: Int32Array): Promise<any> {

    }


    /**
     * Generate Token Based on TokenType
     */
    private async GenerateToken(TokenTypes: TokenType, CustomToken?: string) {
        switch (TokenTypes) {
            case TokenType.DEFAULT:
                return "1234";
                break;
            case TokenType.SECURE:
                return "1234";
                break;
            case TokenType.CUSTOM:
                return CustomToken;
                break;
            default:
                return "ERROR"
                break;
        }
    }

}

//TODO: MOVE TO MODELS FOLDER
enum TokenType {
    DEFAULT,
    SECURE,
    CUSTOM
}

export default () => {
    return new ChallengeServices();
}