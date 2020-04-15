import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Album } from './album';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "/api";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }


  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(apiUrl)
      .pipe(
        tap(Albums => console.log('fetched Albums')),
        catchError(this.handleError('getAlbums', []))
      );
  }
  
  getAlbum(catalogNumber
    : number): Observable<Album> {
    const url = `${apiUrl}/${catalogNumber
    }`;
    return this.http.get<Album>(url).pipe(
      tap(_ => console.log(`fetched Album catalogNumber
      =${catalogNumber
      }`)),
      catchError(this.handleError<Album>(`getAlbum catalogNumber
      =${catalogNumber
      }`))
    );
  }
  
  addAlbum(Album: Album): Observable<Album> {
    return this.http.post<Album>(apiUrl, Album, httpOptions).pipe(
      tap((bk: Album) => console.log(`added Album w/ catalogNumber
      =${bk._catalogNumber}`)),
      catchError(this.handleError<Album>('addAlbum'))
    );
  }
  
  updateAlbum(catalogNumber
    : any, Album: Album): Observable<any> {
    const url = `${apiUrl}/${catalogNumber
    }`;
    return this.http.put(url, Album, httpOptions).pipe(
      tap(_ => console.log(`updated Album catalogNumber
      =${catalogNumber
      }`)),
      catchError(this.handleError<any>('updateAlbum'))
    );
  }
  
  deleteAlbum(catalogNumber
    : any): Observable<Album> {
    const url = `${apiUrl}/${catalogNumber
    }`;
    return this.http.delete<Album>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted Album catalogNumber
      =${catalogNumber
      }`)),
      catchError(this.handleError<Album>('deleteAlbum'))
    );
  }
}
