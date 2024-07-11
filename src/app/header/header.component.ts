import { CommonModule } from '@angular/common';
import { Component, DoCheck } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements DoCheck{
  isMenuVisible=false;
  constructor(private route:Router){
    let user=sessionStorage.getItem('username');
    if(user){
      this.isMenuVisible = true;
    }
  }
  ngDoCheck(): void {
    let currentroute = this.route.url;
    let user=sessionStorage.getItem('username');
    if (user) {
      this.isMenuVisible = true
    } else {
      this.isMenuVisible = false
    }
  }
}
