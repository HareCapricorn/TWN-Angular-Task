import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/interfaces/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleFetchService {
  private apiUrl: string = 'https://midaiganes.irw.ee/api/list/';
  constructor(
    private http: HttpClient,
  ) {}

  getArticle(articleId: string): Observable<Article> {
    return this.http.get<Article>(this.apiUrl + articleId);
  }
}
