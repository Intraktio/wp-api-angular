import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http/src/static_response';
import { WpApiParent } from './Parent';
import { WpApiLoader } from './Loaders';
import { IWpApiComments } from './interfaces';
export declare class WpApiComments extends WpApiParent implements IWpApiComments {
    wpApiLoader: WpApiLoader;
    http: Http;
    constructor(wpApiLoader: WpApiLoader, http: Http);
    getList(options?: {}): Observable<Response>;
    get(commentId: number, options?: {}): Observable<Response>;
    create(body?: {}, options?: {}): Observable<Response>;
    update(commentId: number, body?: {}, options?: {}): Observable<Response>;
    delete(commentId: number, options?: {}): Observable<Response>;
}
