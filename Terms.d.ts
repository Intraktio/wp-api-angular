import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http/src/static_response';
import { WpApiParent } from './Parent';
import { WpApiLoader } from './Loaders';
import { IWpApiTerms } from './interfaces';
export declare class WpApiTerms extends WpApiParent implements IWpApiTerms {
    wpApiLoader: WpApiLoader;
    http: Http;
    constructor(wpApiLoader: WpApiLoader, http: Http);
    getList(taxonomiesType?: string, options?: {}): Observable<Response>;
    get(taxonomiesType: string, termId: number, options?: {}): Observable<Response>;
    create(taxonomiesType?: string, body?: {}, options?: {}): Observable<Response>;
    update(taxonomiesType: string, termId: number, body?: {}, options?: {}): Observable<Response>;
    delete(taxonomiesType: string, termId: number, options?: {}): Observable<Response>;
}
