import { Http } from '@angular/http';
export declare abstract class WpApiLoader {
    abstract getWebServiceUrl(postfix: string): string;
    abstract baseUrl: string;
    abstract namespace: string;
}
export declare class WpApiStaticLoader implements WpApiLoader {
    private http;
    private _baseUrl;
    private _namespace;
    completeUrl: string;
    constructor(http: Http, _baseUrl?: string, _namespace?: string);
    baseUrl: string;
    namespace: string;
    getWebServiceUrl(postfix: string): string;
}
