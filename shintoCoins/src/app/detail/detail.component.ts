import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id = "";
  amount = "";
  action = "";

  constructor(private _route: ActivatedRoute,private _http: HttpService) { }

  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log("id: ", this.id);
      let ledger = this._http.getLedger();
      for(let tran of ledger){
        if(tran['id'] == this.id){
          this.action = tran['action'];
          this.amount = tran['amount'];
          break;
        }
      }
    })
  }
}
