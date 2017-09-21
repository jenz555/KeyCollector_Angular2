import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KcFooterComponent } from './kc-footer.component';

describe('KcFooterComponent', () => {
  let component: KcFooterComponent;
  let fixture: ComponentFixture<KcFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KcFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KcFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
