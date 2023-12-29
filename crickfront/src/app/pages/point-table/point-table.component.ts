import { Component, OnInit } from '@angular/core';
import { ApiCallService } from 'src/app/services/api-call.service';

@Component({
  selector: 'app-point-table',
  templateUrl: './point-table.component.html',
  styleUrls: ['./point-table.component.css']
})
export class PointTableComponent implements OnInit {
  pointTable:any;
  tableHeading:any;
constructor(private _api:ApiCallService)
{

}
  ngOnInit(): void {
    this._api.getPointTable().subscribe({
      next:data=>
      {
        this.pointTable=data;
        console.log(this.pointTable);
        this.tableHeading=[...this.pointTable[0]]
        console.log(this.tableHeading);
      },
      error:error=>{
        console.log(error);
      }
    })
  }
}
