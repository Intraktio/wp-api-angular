import { ICredentials } from './interfaces';
export declare class AuthSession {
    static saveSession(credentials: ICredentials): void;
    static getSession(): ICredentials;
    static removeSession(): void;
}
