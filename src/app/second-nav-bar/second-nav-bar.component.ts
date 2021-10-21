import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-second-nav-bar',
  templateUrl: './second-nav-bar.component.html',
  styleUrls: ['./second-nav-bar.component.css']
})
export class SecondNavBarComponent implements OnInit {

  constructor(public _router: Router) {}

  ngOnInit(): void {
  }

}
