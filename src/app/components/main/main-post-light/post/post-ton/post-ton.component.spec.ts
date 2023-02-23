import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTonComponent } from './post-ton.component';

describe('PostTonComponent', () => {
  let component: PostTonComponent;
  let fixture: ComponentFixture<PostTonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostTonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostTonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
