import {ComponentFixture, TestBed} from '@angular/core/testing';
import { MianLibService } from 'mushroomsoft-lib';
import { SectionComponent } from './section.component';


describe('SectionComponent', () => {
  let service: MianLibService;
  let component: SectionComponent;
  let fixture: ComponentFixture<SectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should initialization of the component', () => {
    expect(service).toBeTruthy();
    expect(component).toBeTruthy();
  });
});
