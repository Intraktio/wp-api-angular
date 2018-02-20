import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http/src/static_response';
import { WpApiParent } from './Parent';
import { WpApiLoader } from './Loaders';
import { IWpApiMedia } from './interfaces';
export declare class WpApiMedia extends WpApiParent implements IWpApiMedia {
    wpApiLoader: WpApiLoader;
    http: Http;
    constructor(wpApiLoader: WpApiLoader, http: Http);
    getList(options?: {}): Observable<Response>;
    get(mediaId: number, options?: {}): Observable<Response>;
    create(body?: {}, options?: {}): Observable<Response>;
    update(mediaId: number, body?: {}, options?: {}): Observable<Response>;
    delete(mediaId: number, options?: {}): Observable<Response>;
}
