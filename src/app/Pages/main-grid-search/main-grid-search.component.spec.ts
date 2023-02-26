import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGridSearchComponent } from './main-grid-search.component';

describe('MainGridSearchComponent', () => {
  let component: MainGridSearchComponent;
  let fixture: ComponentFixture<MainGridSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainGridSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainGridSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
