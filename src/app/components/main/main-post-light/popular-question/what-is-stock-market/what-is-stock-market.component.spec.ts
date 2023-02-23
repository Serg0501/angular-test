import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsStockMarketComponent } from './what-is-stock-market.component';

describe('WhatIsStockMarketComponent', () => {
  let component: WhatIsStockMarketComponent;
  let fixture: ComponentFixture<WhatIsStockMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatIsStockMarketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatIsStockMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
