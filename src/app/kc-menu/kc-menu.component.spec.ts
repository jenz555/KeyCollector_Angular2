import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KcMenuComponent } from './kc-menu.component';

describe('KcMenuComponent', () => {
  let component: KcMenuComponent;
  let fixture: ComponentFixture<KcMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KcMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KcMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
