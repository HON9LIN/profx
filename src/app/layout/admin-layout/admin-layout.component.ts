import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profx-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  menus = [
    { icon: 'dashboard', label: 'Dashboard', route: '/' },
    { icon: 'calendar', label: 'Orders', route: '/orders' },
    { icon: 'leads', label: 'History', route: '/history' },
    { icon: 'marketing', label: 'Profile', route: '/profile' },
    { icon: 'settings', label: 'Settings', route: '/settings' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
