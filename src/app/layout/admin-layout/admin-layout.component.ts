import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profx-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  menus = [
    { icon: 'dashboard', label: 'Dashboard', route: '/' },
    { icon: 'orders', label: 'Orders', route: '/orders' },
    { icon: 'history', label: 'History', route: '/history' },
    { icon: 'profile', label: 'Profile', route: '/profile' },
    { icon: 'settings', label: 'Settings', route: '/settings' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
