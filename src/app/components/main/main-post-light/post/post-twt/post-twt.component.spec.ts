import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTwtComponent } from './post-twt.component';

describe('PostTwtComponent', () => {
  let component: PostTwtComponent;
  let fixture: ComponentFixture<PostTwtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostTwtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostTwtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
