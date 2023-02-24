import { Component, EventEmitter, Input, Output } from '@angular/core';
import { loggingservice } from '../logging.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [loggingservice]
})
export class AccountComponent {
  constructor(private loggingservice:loggingservice){}

  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();


  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    this.loggingservice.logStatusChange(status)
  }
}
