import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainListLightComponent } from './main-list-light.component';

describe('MainListLightComponent', () => {
  let component: MainListLightComponent;
  let fixture: ComponentFixture<MainListLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainListLightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainListLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
