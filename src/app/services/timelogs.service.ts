import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Timelogs } from '../models/timelogs';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class TimelogsService {
  private baseUrl = 'https://localhost:7102/api/Timelogs';

  constructor(private http: HttpClient, private sessionService: SessionService) { }

  postTimeLog(timeLog: Timelogs, isClockedIn: boolean): Observable<any> {
    const url = `${this.baseUrl}/timelogs`;
    const params = new HttpParams().set('isClockedIn', isClockedIn.toString());
  
    return this.http.post<any>(url, timeLog, { params }).pipe(
      tap(response => {
        console.log('Time log posted successfully', response);
      }),
      catchError(error => {
        console.error('Error posting time log:', error);
        return throwError('Failed to post time log. Please try again.');
      })
    );
  }
  

  getTimeLogs(userId: number): Observable<Timelogs[]> {
    const url = `${this.baseUrl}/mytimelogs`;
    const params = new HttpParams().set('userid', userId.toString());

    return this.http.get<Timelogs[]>(url, { params }).pipe(
      catchError(error => {
        console.error('Error fetching time logs:', error);
        return throwError('Failed to fetch time logs. Please try again.');
      })
    );
  }

  getDailyTimeLogs(userId: number): Observable<Timelogs[]> {
    const url = `${this.baseUrl}/dailytimelogs`;
    const params = new HttpParams().set('userid', userId.toString());

    return this.http.get<Timelogs[]>(url, { params }).pipe(
      catchError(error => {
        console.error('Error fetching time logs:', error);
        return throwError('Failed to fetch time logs. Please try again.');
      })
    );
  }

}
