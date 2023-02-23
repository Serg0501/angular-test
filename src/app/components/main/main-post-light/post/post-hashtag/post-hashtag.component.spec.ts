import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostHashtagComponent } from './post-hashtag.component';

describe('PostHashtagComponent', () => {
  let component: PostHashtagComponent;
  let fixture: ComponentFixture<PostHashtagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostHashtagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostHashtagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
