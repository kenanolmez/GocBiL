import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { tns } from "tiny-slider"
import { LightgalleryModule } from 'lightgallery/angular';


@Component({
  selector: 'app-screenshot',
  standalone: true,
  imports: [
    CommonModule,
    LightgalleryModule
  ],
  templateUrl: './screenshot.component.html',
  styleUrl: './screenshot.component.scss'
})
export class ScreenshotComponent {
  images = [
    'assets/images/phone/1.png',
    'assets/images/phone/2.png',
    'assets/images/phone/3.png',
    'assets/images/phone/4.png',
    'assets/images/phone/5.png',
    'assets/images/phone/6.png',
    'assets/images/phone/7.png',
    'assets/images/phone/8.png',
  ]

  slider:any 

  ngAfterViewInit(): void {
    this.slider = tns({
      container: '.tiny-four-item',
      controls: true,
      mouseDrag: true,
      loop: true,
      rewind: true,
      autoplay: true,
      autoplayButtonOutput: false,
      autoplayTimeout: 3000,
      navPosition: "bottom",
      controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
      nav: false,
      speed: 400,
      gutter: 0,
      responsive: {
          992: {
              items: 4
          },

          767: {
              items: 3
          },

          425: {
              items: 1
          },
      },
  });
  }
}
