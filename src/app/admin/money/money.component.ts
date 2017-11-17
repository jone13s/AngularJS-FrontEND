import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { Router } from '@angular/router';


@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class MoneyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
