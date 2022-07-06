import { Injectable } from '@angular/core';
 
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
 
@Injectable()
export class LogRetrievalService {
 
  baseURL: string = "127.0.0.1:3030/v1";
 
  constructor(private http: HttpClient) {
  }
 
  retrieveLogs(logKey: string, logDate: string): Observable<any> {
    return this.http.get(this.baseURL + '/logs' + '/' + logKey + '/' + logDate)
  }
 
}