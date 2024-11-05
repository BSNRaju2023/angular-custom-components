export interface ColumnConfig {
  label: string;
  fieldName: string;
  type?: string;
  options?: { label: string; value: string }[]; // Optional for select fields
}