// dynamic-table.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface FieldConfig {
  type: 'text' | 'select' | 'checkbox' | 'number';
  label: string;
  options?: string[];  // Only applicable for select fields
  required?: boolean;
  min?: number;        // Only applicable for number fields
}

@Component({
  selector: 'app-dynamic-fields-table',
  templateUrl: './dynamic-fields-table.component.html',
  styles: [`
    table { width: 100%; border-collapse: collapse; }
    th, td { padding: 8px; text-align: left; border: 1px solid #ddd; }
    button { margin-top: 10px; margin-right: 5px; }
    .error { color: red; font-size: 0.8rem; }
  `]
})
export class DynamicFieldsTableComponent {
  @Input() fieldConfig: FieldConfig[] = [];  // Array of field configurations
  @Output() formDataChange = new EventEmitter<any>(); // Emit form data to parent
  @Output() formValidityChange = new EventEmitter<boolean>(); // Emit form validity to parent

  rows: any[] = [{}];
  errors: any[] = [{}];

  addRow() {
    const newRow: any = {};
    this.fieldConfig.forEach(field => newRow[field.label] = field.type === 'checkbox' ? false : '');
    this.rows.push(newRow);
    this.errors.push({});
    this.emitFormStatus();
  }

  onInputChange(fieldLabel: string, $eve: any, index: number) {
    this.rows[index][fieldLabel] = $eve.target.value;
    this.validateRow(index);
    this.emitFormStatus();
  }

  validateRow(index: number) {
    const row = this.rows[index];
    const rowErrors: any = {};

    this.fieldConfig.forEach(field => {
      if (field.required && !row[field.label]) {
        rowErrors[field.label] = `${field.label} is required`;
      }
      if (field.type === 'number' && field.min !== undefined && +row[field.label] < field.min) {
        rowErrors[field.label] = `${field.label} must be at least ${field.min}`;
      }
    });

    this.errors[index] = rowErrors;
  }

  emitFormStatus() {
    const isFormValid = this.errors.every(error => Object.keys(error).length === 0);
    this.formDataChange.emit(this.rows);
    this.formValidityChange.emit(isFormValid);
  }
}
