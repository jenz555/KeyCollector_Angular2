import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KcContactComponent } from './kc-contact.component';

describe('KcContactComponent', () => {
  let component: KcContactComponent;
  let fixture: ComponentFixture<KcContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KcContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KcContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
