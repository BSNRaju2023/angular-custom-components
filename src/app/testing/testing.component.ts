import { Component, OnInit } from '@angular/core';
import { FieldConfig } from '../dynamic-fields-table/dynamic-fields-table.component';
@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  fieldConfig:FieldConfig[] = [
    { type: 'text', label: 'Name', required: true },
    { type: 'select', label: 'Category', options: ['Option 1', 'Option 2', 'Option 3'], required: true },
    { type: 'checkbox', label: 'Active' },
    { type: 'number', label: 'Quantity', required: true, min: 1 }
  ];

  formData: any[] = [];
  isFormValid = false;

  onFormDataChange(updatedData: any) {
    this.formData = updatedData;
  }

  onFormValidityChange(isValid: boolean) {
    this.isFormValid = isValid;
  }

  submit() {
    if (this.isFormValid) {
      console.log('Form Submitted:', this.formData);
    } else {
      console.log('Form contains errors');
    }
  }
}
