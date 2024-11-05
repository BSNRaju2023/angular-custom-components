import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDataDialogComponent } from './add-edit-data-dialog.component';

describe('AddEditDataDialogComponent', () => {
  let component: AddEditDataDialogComponent;
  let fixture: ComponentFixture<AddEditDataDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditDataDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
