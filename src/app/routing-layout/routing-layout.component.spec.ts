import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingLayoutComponent } from './routing-layout.component';

describe('RoutingLayoutComponent', () => {
  let component: RoutingLayoutComponent;
  let fixture: ComponentFixture<RoutingLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
