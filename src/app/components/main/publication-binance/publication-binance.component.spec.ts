import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationBinanceComponent } from './publication-binance.component';

describe('PublicationBinanceComponent', () => {
  let component: PublicationBinanceComponent;
  let fixture: ComponentFixture<PublicationBinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationBinanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicationBinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
