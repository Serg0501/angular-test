import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeBuyingComponent } from './safe-buying.component';

describe('SafeBuyingComponent', () => {
  let component: SafeBuyingComponent;
  let fixture: ComponentFixture<SafeBuyingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafeBuyingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafeBuyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
