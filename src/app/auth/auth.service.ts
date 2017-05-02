import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()

export class AuthService {
    constructor (private http: Http) {}

    public baseUrl = 'http://eleksfrontendcamp-mockapitron.rhcloud.com/';

    public logIn(data) {
        return this.http.post(this.baseUrl + 'login', data)
                        .map(this.extractData);
    }

    public signUp(data) {
        return this.http.post(this.baseUrl + 'signup', data).subscribe();
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }
}