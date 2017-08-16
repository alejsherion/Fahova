import { Injectable } from '@angular/core';
import { Request, XHRBackend, RequestOptions, Response, Http, RequestOptionsArgs, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Config } from '../interfaces/config';
import { CONFIG_FILE_NAME, OP_SESSION_NAME, OP_TOKEN_NAME } from '../core/globals';

@Injectable()
export class AuthenticatedHttpService extends Http {

    private _config: Config;
    private _headers: Headers;

    constructor(backend: XHRBackend, defaultOptions: RequestOptions) {
        super(backend, defaultOptions);

        this._headers = new Headers();

        this.request = this.request.bind(this);
        this.get = this.get.bind(this);
        this.post = this.post.bind(this);

        let objConfig = localStorage.getItem(CONFIG_FILE_NAME);
        if (objConfig != undefined && objConfig != null)
            this._config = JSON.parse(objConfig);

        let objToken = localStorage.getItem(OP_SESSION_NAME);
        if (objToken != undefined && objConfig != null)
            this._headers.append(OP_TOKEN_NAME, objToken);
    }

    private getOptions(options: RequestOptionsArgs): RequestOptionsArgs {
        if (options == undefined || options == null)
            return { headers: this._headers };

        if (options.headers == undefined || options.headers == null)
            options.headers = this._headers;

        if (!options.headers.has(OP_TOKEN_NAME))
            options.headers.append(OP_TOKEN_NAME, this._headers.get(OP_TOKEN_NAME));

        return options;
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, this.getOptions(options)).catch((error: Response) => {
            if (error.status === 401 || error.status === 403) {
                console.log('La sesión ha expirado o el usuario no se encuentra autorizado.');
                if (this._config != undefined && this._config != null)
                    window.location.href = this._config.pathBase;
            }
            return Observable.throw(error);
        });
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.get(url, this.getOptions(options)).catch((error: Response) => {
            if (error.status === 401 || error.status === 403) {
                console.log('La sesión ha expirado o el usuario no se encuentra autorizado.');
                if (this._config != undefined && this._config != null)
                    window.location.href = this._config.pathBase;
            }
            return Observable.throw(error);
        });
    }

    post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return super.post(url, body, this.getOptions(options)).catch((error: Response) => {
            if (error.status === 401 || error.status === 403) {
                console.log('La sesión ha expirado o el usuario no se encuentra autorizado.');
                if (this._config != undefined && this._config != null)
                    window.location.href = this._config.pathBase;
            }
            return Observable.throw(error);
        });
    }
}
