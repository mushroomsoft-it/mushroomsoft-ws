// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MianLibComponent} from './lib.component';

describe('MianLibComponent', () => {
  let component: MianLibComponent;
  let fixture: ComponentFixture<MianLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MianLibComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MianLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
