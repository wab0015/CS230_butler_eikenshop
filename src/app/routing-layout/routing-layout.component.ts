import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-routing-layout',
  templateUrl: './routing-layout.component.html',
  styleUrls: ['./routing-layout.component.css']
})
export class RoutingLayoutComponent implements OnInit {


  constructor(public _router: Router) {}

  ngOnInit(): void {
  }

}
