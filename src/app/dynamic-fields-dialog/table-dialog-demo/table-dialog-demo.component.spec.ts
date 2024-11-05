import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDialogDemoComponent } from './table-dialog-demo.component';

describe('TableDialogDemoComponent', () => {
  let component: TableDialogDemoComponent;
  let fixture: ComponentFixture<TableDialogDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableDialogDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDialogDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
