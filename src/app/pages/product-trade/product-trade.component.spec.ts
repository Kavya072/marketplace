import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTradeComponent } from './product-trade.component';

describe('ProductTradeComponent', () => {
  let component: ProductTradeComponent;
  let fixture: ComponentFixture<ProductTradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductTradeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
