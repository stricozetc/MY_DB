import {
  Component,
  ViewChild,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { EMPLOY_COLUMN } from 'src/app/options';
import { EmployesTable } from 'src/app/interfaces';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public displayedColumns: string[] = EMPLOY_COLUMN;
  public dataSource: MatTableDataSource<EmployesTable> = new MatTableDataSource(this.utilsService.employesTable);
  public selection = new SelectionModel<any>(true, []);
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private utilsService: UtilsService) {}

  ngOnInit() {
    this.utilsService.$employesTable.subscribe(value => {
      this.dataSource = new MatTableDataSource(value);
    });
    this.dataSource.sort = this.sort;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.employ + 1}`;
  }
}
