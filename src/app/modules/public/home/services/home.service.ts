import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, retry } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor( private http: HttpClient) { }

  getMovie(title: string): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}t=${title}&apikey=${environment.API_KEY}`)
    .pipe(
      retry(1),
      catchError((error) => {return error})
    );
  }
}
