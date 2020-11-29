import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddCardComponent } from './admin-add-card.component';

describe('AdminAddCardComponent', () => {
  let component: AdminAddCardComponent;
  let fixture: ComponentFixture<AdminAddCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
