import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NevToolbarComponent } from './nev-toolbar.component';

describe('NevToolbarComponent', () => {
  let component: NevToolbarComponent;
  let fixture: ComponentFixture<NevToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NevToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NevToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
