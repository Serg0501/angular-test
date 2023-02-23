import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationEthereumComponent } from './publication-ethereum.component';

describe('PublicationEthereumComponent', () => {
  let component: PublicationEthereumComponent;
  let fixture: ComponentFixture<PublicationEthereumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationEthereumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicationEthereumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
