import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-partner',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './partner.component.html',
  styleUrl: './partner.component.scss'
})
export class PartnerComponent {
  image: any = [
    "assets/images/client/goc.png",
    "assets/images/client/randevu.png",
    "assets/images/client/ikamet.png",
    "assets/images/client/uyum.png",
    "assets/images/client/ggd.png",
    "assets/images/client/yimer.png",
  ]
}
