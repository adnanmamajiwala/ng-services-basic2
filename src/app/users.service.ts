import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable()
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  @Output() movedToActive = new EventEmitter<number>();
  @Output() movedToInactive = new EventEmitter<number>();

  constructor() { }

  moveToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  moveToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }

}
