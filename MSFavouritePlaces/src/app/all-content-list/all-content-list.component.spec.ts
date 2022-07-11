import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllContentListComponent } from './all-content-list.component';

describe('AllContentListComponent', () => {
  let component: AllContentListComponent;
  let fixture: ComponentFixture<AllContentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllContentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllContentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
