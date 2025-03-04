import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaidManagementComponent } from './maid-management.component';

describe('MaidManagementComponent', () => {
  let component: MaidManagementComponent;
  let fixture: ComponentFixture<MaidManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaidManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaidManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
