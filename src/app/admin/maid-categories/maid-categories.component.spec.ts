import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaidCategoriesComponent } from './maid-categories.component';

describe('MaidCategoriesComponent', () => {
  let component: MaidCategoriesComponent;
  let fixture: ComponentFixture<MaidCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaidCategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaidCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
