import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MianLibService } from 'mushroomsoft-lib';
import { ArticleComponent } from './article.component';

describe('ArticleComponent', () => {
  let service: MianLibService;
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MianLibService);
  });

  it('should initialization of the component', () => {
    expect(service).toBeTruthy();
    expect(component).toBeTruthy();
  });
});
