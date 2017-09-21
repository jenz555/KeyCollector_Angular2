import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KcHeroComponent } from './kc-hero.component';

describe('KcHeroComponent', () => {
  let component: KcHeroComponent;
  let fixture: ComponentFixture<KcHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KcHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KcHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
