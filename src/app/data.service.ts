import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  public getSomeData(): Observable<object> {
    let url: string = '/api/recipes';
    return this.httpClient.get(url);
  }
}
