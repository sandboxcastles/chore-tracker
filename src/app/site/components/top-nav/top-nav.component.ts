import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  navItems: { label: string; path: string[]; }[] = [
    { label: 'Home', path: [''] },
    { label: 'About', path: ['about'] },
    { label: 'Login', path: ['auth']},
    { label: 'Chore Tracker', path: ['chore-tracker']}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
