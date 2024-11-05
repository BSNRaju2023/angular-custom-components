import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColumnConfig } from './ColumnConfig';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})

export class TableComponent {
  @Input() data: any[] = [];
  @Input() columns: ColumnConfig[] = [];

  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  onEdit(index: number) {
    this.edit.emit(index);
  }

  onDelete(index: number) {
    this.delete.emit(index);
  }
}
