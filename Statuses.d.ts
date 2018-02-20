import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http/src/static_response';
import { WpApiParent } from './Parent';
import { WpApiLoader } from './Loaders';
import { IWpApiStatuses } from './interfaces';
export declare class WpApiStatuses extends WpApiParent implements IWpApiStatuses {
    wpApiLoader: WpApiLoader;
    http: Http;
    constructor(wpApiLoader: WpApiLoader, http: Http);
    getList(options?: {}): Observable<Response>;
    get(statusesName: string, options?: {}): Observable<Response>;
}
