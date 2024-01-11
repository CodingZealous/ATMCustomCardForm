import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ATMCard';
  accountNum:any;
  phoneNum:any;
  cardName:any;
  expDate:any;
  address:any;
  startDate:any;
  generateCVV:any;


  public onKeypressEvent(value:any){
    let accountNum = value.target.value
    var account = accountNum.split(" ").join("");
    if (account.length > 0) {
      account = account.match(new RegExp('.{1,4}', 'g')).join(" ");
    }
    this.accountNum = account;
  }
}
