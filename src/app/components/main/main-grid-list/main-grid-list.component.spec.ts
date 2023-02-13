import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGridListComponent } from './main-grid-list.component';

describe('MainGridListComponent', () => {
  let component: MainGridListComponent;
  let fixture: ComponentFixture<MainGridListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainGridListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
