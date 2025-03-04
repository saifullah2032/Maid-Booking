import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaidProfilesComponent } from './maid-profiles.component';

describe('MaidProfilesComponent', () => {
  let component: MaidProfilesComponent;
  let fixture: ComponentFixture<MaidProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaidProfilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaidProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
