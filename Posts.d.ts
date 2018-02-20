import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http/src/static_response';
import { WpApiParent } from './Parent';
import { WpApiLoader } from './Loaders';
import { IWpApiPosts } from './interfaces';
export declare class WpApiPosts extends WpApiParent implements IWpApiPosts {
    wpApiLoader: WpApiLoader;
    http: Http;
    constructor(wpApiLoader: WpApiLoader, http: Http);
    getList(options?: {}): Observable<Response>;
    get(postId: number, options?: {}): Observable<Response>;
    create(body?: {}, options?: {}): Observable<Response>;
    update(postId: number, body?: {}, options?: {}): Observable<Response>;
    delete(postId: number, options?: {}): Observable<Response>;
    getMetaList(postId: number, options?: {}): Observable<Response>;
    getMeta(postId: number, metaId: number, options?: {}): Observable<Response>;
    getRevisionList(postId: number, options?: {}): Observable<Response>;
    getRevision(postId: number, revisionId: number, options?: {}): Observable<Response>;
    getCategoryList(postId: number, options?: {}): Observable<Response>;
    getCategory(postId: number, categoryId: number, options?: {}): Observable<Response>;
    getTagList(postId: number, options?: {}): Observable<Response>;
    getTag(postId: number, tagId: number, options?: {}): Observable<Response>;
}
