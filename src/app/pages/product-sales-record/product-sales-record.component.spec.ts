import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSalesRecordComponent } from './product-sales-record.component';

describe('ProductSalesRecordComponent', () => {
  let component: ProductSalesRecordComponent;
  let fixture: ComponentFixture<ProductSalesRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSalesRecordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSalesRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
