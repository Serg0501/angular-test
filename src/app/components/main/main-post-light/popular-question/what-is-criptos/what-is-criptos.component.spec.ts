import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsCriptosComponent } from './what-is-criptos.component';

describe('WhatIsCriptosComponent', () => {
  let component: WhatIsCriptosComponent;
  let fixture: ComponentFixture<WhatIsCriptosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatIsCriptosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatIsCriptosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
