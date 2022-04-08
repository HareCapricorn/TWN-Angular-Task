import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableFetchResult } from 'src/app/interfaces/tablefetchresult';

@Injectable({
  providedIn: 'root'
})
export class TableFetchService {
  private apiUrl: string = 'https://midaiganes.irw.ee/api/list?limit=500';
  constructor(
    private http: HttpClient,
  ) {}

  getTable(): Observable<TableFetchResult> {
    return this.http.get<TableFetchResult>(this.apiUrl);
  }
}
