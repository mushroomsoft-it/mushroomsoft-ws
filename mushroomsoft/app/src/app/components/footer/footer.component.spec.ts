import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MianLibService } from 'mushroomsoft-lib';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let service: MianLibService;
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MianLibService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should initialization of the component', () => {
    expect(service).toBeTruthy();
    expect(component).toBeTruthy();
  });
});
