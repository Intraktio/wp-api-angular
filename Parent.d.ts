import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RequestOptionsArgs } from '@angular/http/src/interfaces';
import { Response } from '@angular/http/src/static_response';
import { WpApiLoader } from './Loaders';
import { IParent } from './interfaces';
export declare class WpApiParent implements IParent {
    wpApiLoader: WpApiLoader;
    http: Http;
    constructor(wpApiLoader: WpApiLoader, http: Http);
    protected getToken(): string;
    protected hasToken(): boolean;
    protected getWebServiceUrl(postfix: string): string;
    protected getDefaultOptions(options?: RequestOptionsArgs): RequestOptionsArgs;
    httpGet(url: string, options?: {}): Observable<Response>;
    httpHead(url: string, options?: {}): Observable<Response>;
    httpDelete(url: string, options?: {}): Observable<Response>;
    httpPost(url: string, body?: {}, options?: {}): Observable<Response>;
    httpPut(url: string, body?: {}, options?: {}): Observable<Response>;
    httpPatch(url: string, body?: {}, options?: {}): Observable<Response>;
}
