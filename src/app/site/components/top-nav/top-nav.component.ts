import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  navItems: { label: string; path: string[]; }[] = [
    { label: 'Home', path: [''] },
    { label: 'About', path: ['about'] }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
