import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryQuotationFormComponent } from './enquiry-quotation-form.component';

describe('EnquiryQuotationFormComponent', () => {
  let component: EnquiryQuotationFormComponent;
  let fixture: ComponentFixture<EnquiryQuotationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquiryQuotationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquiryQuotationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
