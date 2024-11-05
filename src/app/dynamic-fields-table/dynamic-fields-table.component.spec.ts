import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFieldsTableComponent } from './dynamic-fields-table.component';

describe('DynamicFieldsTableComponent', () => {
  let component: DynamicFieldsTableComponent;
  let fixture: ComponentFixture<DynamicFieldsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFieldsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFieldsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
