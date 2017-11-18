import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../user.service';
import { SocketService } from '../../socket.service';

import { Socket } from 'ng-socket-io';
//
@Component({
  selector: 'app-my_view',
  templateUrl: './my_view.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class MyViewComponent implements OnInit {


  users: any = [];
  loding = false;
  selected = [];


  constructor(
    private userService: UserService, 
    private socketService: SocketService,
    private socket: Socket
  ) { }

  ngOnInit() {

    this.socket.emit('welcome', 'สวัสดี')
    this.socket.on('added-user', (data: any) => {
      console.log(data);
      this.getUsers();
    });

    this.socket.on('removed-user', (data: any) => {
      this.getUsers();
    });

    this.socket.on('welcome-callback', (data: any) => {
      console.log('Server send welcome-callback....')
      console.log(data);
    });

    this.socketService.sendWelcome('Hello');

    this.getUsers();
  }
  async getUsers() {
    this.loding = true;
    let rs = await this.userService.somsak_getUsers();
    // console.log(rs);
    this.users = rs.rows;
    this.loding = false;
  }

}


