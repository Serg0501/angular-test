import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGridLoginMessageComponent } from './main-grid-login-message.component';

describe('MainGridLoginMessageComponent', () => {
  let component: MainGridLoginMessageComponent;
  let fixture: ComponentFixture<MainGridLoginMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainGridLoginMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainGridLoginMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
