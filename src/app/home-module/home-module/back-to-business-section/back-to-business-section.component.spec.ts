import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToBusinessSectionComponent } from './back-to-business-section.component';

describe('BackToBusinessSectionComponent', () => {
  let component: BackToBusinessSectionComponent;
  let fixture: ComponentFixture<BackToBusinessSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackToBusinessSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackToBusinessSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
