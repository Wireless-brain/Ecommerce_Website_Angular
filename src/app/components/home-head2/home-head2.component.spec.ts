import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHead2Component } from './home-head2.component';

describe('HomeHead2Component', () => {
  let component: HomeHead2Component;
  let fixture: ComponentFixture<HomeHead2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeHead2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeHead2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
