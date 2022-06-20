import {Component, OnInit} from '@angular/core';
import {MianLibService} from '@mushroomsoft-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private libService: MianLibService) {}
  public testItems: any;

  ngOnInit() {
      this.libService.getTest().subscribe((data : any ) => {
        this.testItems = data.data[0].attributes.structure.items
        console.log(this.testItems);
      });

  }

}
