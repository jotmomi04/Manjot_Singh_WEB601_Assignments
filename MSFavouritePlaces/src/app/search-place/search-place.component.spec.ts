import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPlaceComponent } from './search-place.component';

describe('SearchPlaceComponent', () => {
  let component: SearchPlaceComponent;
  let fixture: ComponentFixture<SearchPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
