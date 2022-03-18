import {HttpClient, HttpParams} from '@angular/common/http';
import {concat, delay, Observable, retryWhen, take, throwError} from 'rxjs';
import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class UserService{

  protected url: string | undefined;
  protected params: HttpParams | undefined;
  constructor(protected http: HttpClient) {
  }

  getUsers(): Observable<[any]> {
    return this.http.get<[any]>(`${environment.url}/api/user`).pipe(
      retryWhen((errors) =>{
        return concat(
          errors.pipe(delay(500),
            take(3)),
          throwError(new Error('Retry limit exceeded'))
        )
      })
    );
  }

}
