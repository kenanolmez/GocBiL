import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwitcherComponent } from './components/switcher/switcher.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SwitcherComponent,
    ScrollToTopComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'appever';
}
