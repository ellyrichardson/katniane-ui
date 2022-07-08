import { Injectable } from '@angular/core';
 
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { RetrievedLogDetails } from './auditLog';
 
@Injectable({
  providedIn: 'root'
})
export class LogRetrievalService {
 
  baseURL: string = "http://127.0.0.1:3030/v1";
  //retrievedLogs: AuditLog[];
 
  constructor(private http: HttpClient) {
  }
 
  retrieveLogs(logKey: string, logDate: string): Observable<RetrievedLogDetails> {
    console.log('retrieving logs for: ' + logKey + ' on ' + logDate);
    return this.http.get<RetrievedLogDetails>(this.baseURL + '/logs' + '/' + logKey + '/' + logDate)
  }
 
}