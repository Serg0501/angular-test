import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsStakingComponent } from './what-is-staking.component';

describe('WhatIsStakingComponent', () => {
  let component: WhatIsStakingComponent;
  let fixture: ComponentFixture<WhatIsStakingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatIsStakingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatIsStakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
