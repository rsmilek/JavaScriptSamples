import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { IProduct } from './product';

@Injectable({
    providedIn: "root"
})
export class ProductService {
    // To CLI find this path it must be defined in assets of angular.json 
    private _productUrl: string = "api/products/products.json";

    constructor(private _httpClient: HttpClient) {}

    getProducts(): Observable<IProduct[]> {
        return this._httpClient
        .get<IProduct[]>(this._productUrl)
        .pipe(
            tap(data => console.log("ALL", JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse): Observable<never> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(() => errorMessage);
    }
}