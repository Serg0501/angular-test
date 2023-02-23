import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarPublicationsComponent } from './similar-publications.component';

describe('SimilarPublicationsComponent', () => {
  let component: SimilarPublicationsComponent;
  let fixture: ComponentFixture<SimilarPublicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimilarPublicationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimilarPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
