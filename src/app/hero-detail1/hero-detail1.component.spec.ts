import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetail1Component } from './hero-detail1.component';

describe('HeroDetail1Component', () => {
  let component: HeroDetail1Component;
  let fixture: ComponentFixture<HeroDetail1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetail1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetail1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
