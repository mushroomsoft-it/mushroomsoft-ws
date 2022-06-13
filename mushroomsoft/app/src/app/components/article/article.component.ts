import {Component, OnInit} from '@angular/core';
import { MianLibService } from 'mushroomsoft-lib';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  public commitmentItems : any;

  constructor(
    private libService: MianLibService,
  ) {}

  ngOnInit(): void {
    console.log(this.libService.getArticle());
    this.commitmentItems= this.libService.getArticle();
  }
}
