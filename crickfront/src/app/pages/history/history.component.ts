import { Component, OnInit } from '@angular/core';
import { ApiCallService } from 'src/app/services/api-call.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  allMatch: any;
  constructor(private _api:ApiCallService){

  }
  ngOnInit(): void {
    this._api.getAllMatches().subscribe({
      next:data=>{
        this.allMatch=data
      },
      error:error=>{
        console.log(error)
      }
    })
  }
}
