import { CommonModule } from '@angular/common';
import { Component, HostListener, Input,} from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import * as feather from 'feather-icons'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @Input() currentSection:any
  @Input() navLight:any
  @Input() playBtn:any
  @Input() bg:any
  @Input() navCenter:any

  ngAfterViewInit(): void {
    feather.replace()
  }

  toggle:boolean = false
  
  scroll:boolean = false

  @HostListener("window:scroll",['event'])
  

  onhandlerScroll(){
    if (window.scrollY > 0) {
      this.scroll = true
    }else{
      this.scroll = false
    }
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  
}
