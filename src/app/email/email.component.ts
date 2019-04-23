import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {

  
    title = 'Angular 6 Project!';
    todaydate;
    componentproperty;
    constructor(private myservice: EmailService) { }
    ngOnInit() {
       this.todaydate = this.myservice.showTodayDate();
    }
    onClickSubmit(data) {
       alert("Entered Email id : " + data.emailid);
    }
}


