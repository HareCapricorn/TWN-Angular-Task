import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/interfaces/article';
import { ArticleFetchService } from 'src/app/services/article-fetch/article-fetch.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleComponent implements OnInit {
  // Initialize with default article
  articleId: string = '972d2b8a';
  article = <Article>{};
  fetchComplete: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private articleFetch: ArticleFetchService
    ) {
      // Change article id if the route had parameters
      if (this.route.snapshot.params['id']) {
        this.articleId = this.route.snapshot.params['id'];
      }
    }

  ngOnInit(): void {
    this.articleFetch.getArticle(this.articleId).subscribe(result => {
      this.article = result;
      this.fetchComplete = true;
    });
  }
}
