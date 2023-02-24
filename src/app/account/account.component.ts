import { AccountService } from './../account.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { loggingservice } from '../logging.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [loggingservice]
})
export class AccountComponent {
  constructor(private loggingservice:loggingservice,private accountService:AccountService){}

  @Input() account: {name: string, status: string};
  @Input() id: number;

  onSetTo(status: string) {
    this.accountService.updatecount(this.id,status);
    this.loggingservice.logStatusChange(status);
  }
}
