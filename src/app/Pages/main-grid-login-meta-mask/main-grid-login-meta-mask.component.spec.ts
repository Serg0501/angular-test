import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGridLoginMetaMaskComponent } from './main-grid-login-meta-mask.component';

describe('MainGridLoginMetaMaskComponent', () => {
  let component: MainGridLoginMetaMaskComponent;
  let fixture: ComponentFixture<MainGridLoginMetaMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainGridLoginMetaMaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainGridLoginMetaMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
