import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../user.service';
import { SocketService } from '../../socket.service';

import { Socket } from 'ng-socket-io';

@Component({
  selector: 'app-my_view',
  templateUrl: './my_view.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class MyViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async somsak_getUsers() {
    this.loding = true;
    let rs = await this.userService.getUsers();
    // console.log(rs);
    this.users = rs.rows;
    this.loding = false;
  }

}
