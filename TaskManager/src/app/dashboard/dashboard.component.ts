import { Component, OnInit } from '@angular/core';
import { PutformService } from "../services/putform.service";
import { log } from 'util';
import { Form } from "../shared/form";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  form:any = {};

  constructor( private putformservice:PutformService) { }

  ngOnInit() {
    
  }

  onSubmit(){
    console.log(this.form);
    this.putformservice.putForm(this.form).subscribe(
      form=>{
        console.log(form,"after put");
      }
    );
  }

}
