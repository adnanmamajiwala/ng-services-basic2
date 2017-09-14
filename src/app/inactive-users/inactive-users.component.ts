import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];

  counter = 0;

  constructor(private userSevice: UsersService) {
  }

  onSetToActive(id: number) {
    this.userSevice.moveToActive(id);
    this.userSevice.movedToActive.emit(++this.counter);
  }
}
