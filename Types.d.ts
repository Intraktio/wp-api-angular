import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http/src/static_response';
import { WpApiParent } from './Parent';
import { WpApiLoader } from './Loaders';
import { IWpApiTypes } from './interfaces';
export declare class WpApiTypes extends WpApiParent implements IWpApiTypes {
    wpApiLoader: WpApiLoader;
    http: Http;
    constructor(wpApiLoader: WpApiLoader, http: Http);
    getList(options?: {}): Observable<Response>;
    get(postType: string, options?: {}): Observable<Response>;
}
