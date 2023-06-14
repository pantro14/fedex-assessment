import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/compiler';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header
      class="navbar sticky top-0 py-5 z-50 flex justify-center bg-fedex-blue"
    >
      <img width="150" height="150" src="assets/fedex-logo.png" alt="fedex" />
    </header>
  `,
  styles: []
})
export class NavBarComponent {}
