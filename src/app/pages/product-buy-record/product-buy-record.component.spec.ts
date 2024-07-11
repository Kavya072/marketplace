import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBuyRecordComponent } from './product-buy-record.component';

describe('ProductBuyRecordComponent', () => {
  let component: ProductBuyRecordComponent;
  let fixture: ComponentFixture<ProductBuyRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductBuyRecordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductBuyRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
