import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MianLibService } from 'mushroomsoft-lib';
import { TechnologyComponent } from './technology.component';

describe('TechnologyComponent', () => {
    let service: MianLibService;
    let component: TechnologyComponent;
    let fixture: ComponentFixture<TechnologyComponent>;

    beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(MianLibService);
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(TechnologyComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
    it('should initialization of the component', () => {
      expect(service).toBeTruthy();
      expect(component).toBeTruthy();
    });

});
