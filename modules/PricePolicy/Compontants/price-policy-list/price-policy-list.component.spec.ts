import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricePolicyListComponent } from './price-policy-list.component';

describe('PricePolicyListComponent', () => {
  let component: PricePolicyListComponent;
  let fixture: ComponentFixture<PricePolicyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricePolicyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricePolicyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
