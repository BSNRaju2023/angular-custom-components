import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FieldsConfig } from './FieldsConfig';


@Component({
  selector: 'app-add-edit-data-dialog',
  templateUrl: './add-edit-data-dialog.component.html',
  styleUrl: './add-edit-data-dialog.component.scss'
})
export class AddEditDataDialogComponent {
  @Input() fieldsConfig: FieldsConfig[] = [];
  @Input() data: any = null;
  @Output() addRow = new EventEmitter<any>();
  @Output() close = new EventEmitter<void>();

  formData: { [key: string]: any } = {};

  ngOnInit() {
    // Initialize formData with provided data for editing
    if (this.data) {
      this.formData = { ...this.data };
    }
  }

  updateFieldValue(fieldName: string, eve: any) {
    this.formData[fieldName] = eve.target.value;
  }

  onSubmit() {
    this.addRow.emit(this.formData);
  }

  closeDialog() {
    this.close.emit();
  }
}
