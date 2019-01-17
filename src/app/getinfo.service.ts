import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError,  } from 'rxjs/operators';
import {throwError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class GetinfoService {

  constructor(private http: HttpClient) { }

  getInfoFromServer(){
  return  this.http.get('https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=activity&site=stackoverflow')
        .pipe(map(
            (response) =>{
              return response;
            }
        ), //end of map

        catchError(
            (error) =>{
              return throwError('something went terriably wrong' + error);
            }
        )



      );

  }
}
