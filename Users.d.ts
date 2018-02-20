import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http/src/static_response';
import { WpApiParent } from './Parent';
import { WpApiLoader } from './Loaders';
import { IWpApiUsers } from './interfaces';
export declare class WpApiUsers extends WpApiParent implements IWpApiUsers {
    wpApiLoader: WpApiLoader;
    http: Http;
    constructor(wpApiLoader: WpApiLoader, http: Http);
    getList(options?: {}): Observable<Response>;
    me(options?: {}): Observable<Response>;
    get(userId: number, options?: {}): Observable<Response>;
    create(body?: {}, options?: {}): Observable<Response>;
    update(userId: number, body?: {}, options?: {}): Observable<Response>;
    delete(userId: number, options?: {}): Observable<Response>;
}
