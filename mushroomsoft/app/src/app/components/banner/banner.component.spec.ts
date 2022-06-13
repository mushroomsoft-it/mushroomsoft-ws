import {ComponentFixture, TestBed} from '@angular/core/testing';
import { MianLibService } from 'mushroomsoft-lib';
import { BannerComponent } from './banner.component';



describe('BannerComponent', () => {

  let service: MianLibService;
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;



  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
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
