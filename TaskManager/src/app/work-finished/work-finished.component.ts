import { Component, OnInit } from '@angular/core';
import { Form } from "../shared/form";
import { PutformService } from "../services/putform.service";


@Component({
  selector: 'app-work-finished',
  templateUrl: './work-finished.component.html',
  styleUrls: ['./work-finished.component.scss']
})
export class WorkFinishedComponent implements OnInit {
  
  form: Form[];
  constructor(private putformservice:PutformService) { }

  ngOnInit() {
    this.putformservice.getForms().subscribe(form=>this.form=form);
  }

}
