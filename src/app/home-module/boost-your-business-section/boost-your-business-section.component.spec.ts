import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostYourBusinessSectionComponent } from './boost-your-business-section.component';

describe('BoostYourBusinessSectionComponent', () => {
  let component: BoostYourBusinessSectionComponent;
  let fixture: ComponentFixture<BoostYourBusinessSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoostYourBusinessSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoostYourBusinessSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
