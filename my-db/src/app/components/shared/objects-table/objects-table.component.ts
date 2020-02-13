import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';

import { ObjectsService } from 'src/app/services/objects.service';
import { OBJECT_COLUMN } from 'src/app/options';
import { ObjectTable } from 'src/app/interfaces';

@Component({
  selector: 'app-objects-table',
  templateUrl: './objects-table.component.html',
  styleUrls: ['./objects-table.component.scss']
})
export class ObjectsTableComponent implements OnInit {
  public displayedColumns: string[] = OBJECT_COLUMN;
  public dataSource: MatTableDataSource<ObjectTable> = new MatTableDataSource(this.objectService.objectTable);
  public selection = new SelectionModel<any>(true, []);
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private objectService: ObjectsService) {}

  ngOnInit() {
    this.objectService.$objectTable.subscribe(value => {
      this.dataSource = new MatTableDataSource(value);
    });
    this.dataSource.sort = this.sort;
  }

}
