import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInMetaMaskComponent } from './log-in-meta-mask.component';

describe('LogInMetaMaskComponent', () => {
  let component: LogInMetaMaskComponent;
  let fixture: ComponentFixture<LogInMetaMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogInMetaMaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogInMetaMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
