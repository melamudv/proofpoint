import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';


import {IUsers} from '../../app/shared/interfaces';

@Injectable()
export class DataService {

  baseUrl: string = '../assets/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUsers[]> {
    const url = this.baseUrl + 'users.json';
    return this.http.get<IUsers[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
      // Use the following instead if using lite-server
      // return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(error || 'Node.js server error');
  }

}
