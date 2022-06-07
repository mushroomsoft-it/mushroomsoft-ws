import { Component } from '@angular/core';
import commitmentItems from '../../../config/commitment.json';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent  {
  public commitmentItems = commitmentItems.items;
}
