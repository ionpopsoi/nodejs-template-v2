export interface ChallengeTypes {
    PhoneNumber: string
}

export interface ChallengeResponse {
    Uid: string,
    Status: ChallengeStatus,
    ErrorMessage?: String
}

export enum ChallengeStatus {
    ERROR,
    SUCCESS,
}