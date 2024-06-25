import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUnoComponent } from './table-uno.component';

describe('TableUnoComponent', () => {
  let component: TableUnoComponent;
  let fixture: ComponentFixture<TableUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableUnoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
