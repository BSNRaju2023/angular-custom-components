import { Component } from '@angular/core';
import { FieldsConfig } from '../add-edit-data-dialog/FieldsConfig';
import { ColumnsConfig } from '../table/ColumnsConfig';

@Component({
  selector: 'app-table-dialog-demo',
  templateUrl: './table-dialog-demo.component.html',
  styleUrl: './table-dialog-demo.component.scss'
})
export class TableDialogDemoComponent {
  dialogOpen = false;
  editingIndex: number | null = null;
  editingRowData: any = null;

  fieldsConfig: FieldsConfig[] = [
    { label: 'Name', fieldName: 'name', type: 'text' },
    { label: 'Age', fieldName: 'age', type: 'number' },
    {
      label: 'Gender',
      fieldName: 'gender',
      type: 'select',
      options: [
        { label: '--', value: '' },
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' },
      ],
    },
    { label: 'Joining Date', fieldName: 'joiningDate', type: 'date' },
  ];
  columnsConfig: ColumnsConfig[] = [
    { label: 'Name', fieldName: 'name' },
    { label: 'Age', fieldName: 'age' },
    {
      label: 'Gender',
      fieldName: 'gender'
    },
    { label: 'Joining Date', fieldName: 'joiningDate' },
  ];
  tableData: any[] = [];

  openDialog() {
    this.editingIndex = null;
    this.editingRowData = null;
    this.dialogOpen = true;
  }

  editRow(index: number) {
    this.editingIndex = index;
    this.editingRowData = { ...this.tableData[index] };
    this.dialogOpen = true;
  }

  deleteRow(index: number) {
    this.tableData.splice(index, 1);
  }

  closeDialog() {
    this.dialogOpen = false;
  }

  handleAddOrEditRow(rowData: any) {
    if (this.editingIndex !== null) {
      this.tableData[this.editingIndex] = rowData;
    } else {
      this.tableData.push(rowData);
    }
    this.closeDialog();
  }
}
