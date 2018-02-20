import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http/src/static_response';
import { WpApiParent } from './Parent';
import { WpApiLoader } from './Loaders';
import { IWpApiPages } from './interfaces';
export declare class WpApiPages extends WpApiParent implements IWpApiPages {
    wpApiLoader: WpApiLoader;
    http: Http;
    constructor(wpApiLoader: WpApiLoader, http: Http);
    getList(options?: {}): Observable<Response>;
    get(pageId: number, options?: {}): Observable<Response>;
    create(body?: {}, options?: {}): Observable<Response>;
    update(pageId: number, body?: {}, options?: {}): Observable<Response>;
    delete(pageId: number, options?: {}): Observable<Response>;
    getMetaList(pageId: number, options?: {}): Observable<Response>;
    getMeta(pageId: number, metaId: number, options?: {}): Observable<Response>;
    getRevisionList(pageId: number, options?: {}): Observable<Response>;
    getRevision(pageId: number, revisionId: number, options?: {}): Observable<Response>;
}
