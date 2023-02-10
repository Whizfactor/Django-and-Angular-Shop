import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public appPages = [
    { title: 'Home', url: '/Home' },
    { title: 'Shop', url: '/Shop' },
    { title: 'Dashboard', url: '/Dashboard' },
    { title: 'Contact', url: '/Contact'' },
    { title: 'About', url: '/About' },
  ];
  constructor() { }

  ngOnInit() {
  }

}