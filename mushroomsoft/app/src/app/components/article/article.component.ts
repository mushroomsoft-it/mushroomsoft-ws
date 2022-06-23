import {Component, OnInit} from '@angular/core';
import {MianLibService} from '@mushroomsoft-lib';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  public commitmentItems: any = '';

  constructor(private libService: MianLibService) {}

  ngOnInit(){
    this.getForm();
  }

  getForm(): void {
    this.libService.getForm('article').subscribe((data : any) => {
      this.commitmentItems = data.data[0].attributes.structure.items;
    });
  }
}
