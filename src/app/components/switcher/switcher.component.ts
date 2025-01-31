import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';

import * as feather from 'feather-icons'

@Component({
  selector: 'app-switcher',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './switcher.component.html',
  styleUrl: './switcher.component.scss'
})
export class SwitcherComponent {

  ngAfterViewInit(): void {
    feather.replace()
  }

  htmlTag: HTMLElement;

  constructor(private renderer: Renderer2) {
    this.htmlTag = document.getElementsByTagName("html")[0];
  }

  changeTheme(e:any) {
    e.preventDefault()
    if (this.htmlTag.className.includes("dark")) {
      this.renderer.removeClass(this.htmlTag, 'dark');
      this.renderer.addClass(this.htmlTag, 'light');
    } else {
      this.renderer.removeClass(this.htmlTag, 'light');
      this.renderer.addClass(this.htmlTag, 'dark');
    }
  }

  modeChange(e:any) {
    e.preventDefault()
    const switcherRtl = document.getElementById("switchRtl");
        if (switcherRtl && switcherRtl.innerText === "LTR") {
            this.htmlTag.dir = "ltr";
        } else {
            this.htmlTag.dir = "rtl";
        }
  }


}
