import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];

  counter = 0;

  constructor(private userSevice: UsersService) {
  }

  onSetToInactive(id: number) {
    this.userSevice.moveToInactive(id);
    this.userSevice.movedToInactive.emit(++this.counter);
  }
}
