import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { WELDING_COLUMN } from 'src/app/options';
import { WeldingTable } from 'src/app/interfaces';
import { WeldingsService } from 'src/app/services/weldings.service';

@Component({
  selector: 'app-welding-table',
  templateUrl: './welding-table.component.html',
  styleUrls: ['./welding-table.component.scss']
})
export class WeldingTableComponent implements OnInit {
  public displayedColumns: string[] = WELDING_COLUMN;
  public dataSource: MatTableDataSource<WeldingTable> = new MatTableDataSource(this.weldingsService.weldingsTable);
  public selection = new SelectionModel<any>(true, []);
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private weldingsService: WeldingsService) { }

  ngOnInit() {
    this.weldingsService.$weldingsTable.subscribe(value => {
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
