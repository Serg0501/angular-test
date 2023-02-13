import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageMetaMaskComponent } from './message-meta-mask.component';

describe('MessageMetaMaskComponent', () => {
  let component: MessageMetaMaskComponent;
  let fixture: ComponentFixture<MessageMetaMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageMetaMaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageMetaMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
