import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
export class User {
  id?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  dob?: string;
  doj?: string;
  phone?: number;
}
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http:HttpClient) { }
  endpoint = 'http://localhost:3000';
  httpHeader = {
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  getUsers(): Observable<User> {
    return this.http.get<User>(this.endpoint+ '/users').pipe(retry(1), catchError(this.processError));
  }
  getSingleUser(id: any): Observable<User> {
    return this.http.get<User>(this.endpoint + '/users/' + id) .pipe(retry(1), catchError(this.processError));
  }
  addUser(data: any): Observable<User> {
    return this.http.post<User>( this.endpoint + '/users',JSON.stringify(data), this.httpHeader).pipe(retry(1), catchError(this.processError));
  }
  updateUser(id: any, data: any): Observable<User> {
    return this.http.put<User>(this.endpoint + '/users/'+ id,JSON.stringify(data),this.httpHeader).pipe(retry(1), catchError(this.processError));
  }
  deleteUser(id: any) {
    return this.http.delete<User>(this.endpoint + '/users/' + id, this.httpHeader).pipe(retry(1), catchError(this.processError));
  }


  processError(err: any) {
    let message = '';
    if (err.error instanceof ErrorEvent) {
      message = err.error.message;
    } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(() => {
      message;
    });
  }
}
