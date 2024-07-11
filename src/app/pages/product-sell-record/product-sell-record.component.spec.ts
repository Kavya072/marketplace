import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSellRecordComponent } from './product-sell-record.component';

describe('ProductSellRecordComponent', () => {
  let component: ProductSellRecordComponent;
  let fixture: ComponentFixture<ProductSellRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSellRecordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSellRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
