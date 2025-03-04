import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMaidComponent } from './find-maid.component';

describe('FindMaidComponent', () => {
  let component: FindMaidComponent;
  let fixture: ComponentFixture<FindMaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindMaidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindMaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
