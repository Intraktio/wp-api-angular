import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http/src/static_response';
import { WpApiParent } from './Parent';
import { WpApiLoader } from './Loaders';
import { IWpApiAuth, ICredentials, IAuthCredentials } from './interfaces';
export declare class WpApiAuth extends WpApiParent implements IWpApiAuth {
    wpApiLoader: WpApiLoader;
    http: Http;
    constructor(wpApiLoader: WpApiLoader, http: Http);
    protected getWebServiceUrl(postfix: string): string;
    saveSession(credentials: ICredentials): void;
    getSession(): ICredentials;
    removeSession(): void;
    auth(authCredentials: IAuthCredentials, options?: {
        headers: Headers;
    }): Observable<Response>;
    validate(options?: {}): Observable<Response>;
}
