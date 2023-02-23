import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPostLightComponent } from './main-post-light.component';

describe('MainPostLightComponent', () => {
  let component: MainPostLightComponent;
  let fixture: ComponentFixture<MainPostLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPostLightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPostLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
