import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http/src/static_response';
import { WpApiParent } from './Parent';
import { WpApiLoader } from './Loaders';
import { IWpApiTaxonomies } from './interfaces';
export declare class WpApiTaxonomies extends WpApiParent implements IWpApiTaxonomies {
    wpApiLoader: WpApiLoader;
    http: Http;
    constructor(wpApiLoader: WpApiLoader, http: Http);
    getList(options?: {}): Observable<Response>;
    get(taxonomiesType: string, options?: {}): Observable<Response>;
}
