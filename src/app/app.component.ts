import { CommonModule, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  isMenuOpen = false
  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen
  }
  constructor(private viewportScroller: ViewportScroller) {}
  scrollTo(anchor: string): void { this.viewportScroller.scrollToAnchor(anchor); }
}
