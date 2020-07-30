import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSuchPlaceComponent } from './no-such-place.component';

describe('NoSuchPlaceComponent', () => {
  let component: NoSuchPlaceComponent;
  let fixture: ComponentFixture<NoSuchPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoSuchPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoSuchPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
