import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostQmallComponent } from './post-qmall.component';

describe('PostQmallComponent', () => {
  let component: PostQmallComponent;
  let fixture: ComponentFixture<PostQmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostQmallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostQmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
