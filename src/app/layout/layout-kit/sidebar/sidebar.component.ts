import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'profx-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() menus = [];

  isCollapsed = true;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  logout() {
    // TODO: add logout handler
  }
}
