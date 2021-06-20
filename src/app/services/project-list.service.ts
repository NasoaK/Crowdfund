import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IProject } from '../projects-list/Project';

@Injectable({
  providedIn: 'root',
})
export class ProjectListService {
  private readonly PROJECT_API_URL = 'api/projects.json';

  constructor(private http: HttpClient) {}

  public getProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(this.PROJECT_API_URL).pipe(
      tap((projects) => console.log('projects: ', projects)),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): void {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}
