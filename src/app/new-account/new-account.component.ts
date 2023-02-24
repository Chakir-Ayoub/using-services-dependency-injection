import { AccountService } from './../account.service';
import { AccountComponent } from './../account/account.component';
import { loggingservice } from './../logging.service';
import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[loggingservice,AccountService]
})
export class NewAccountComponent {
  constructor(private loggingservice:loggingservice,private accountService:AccountService){}
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addcount(accountName,accountStatus)
    this.loggingservice.logStatusChange(accountStatus);
  }
}
