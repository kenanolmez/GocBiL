import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-one',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './about-one.component.html',
  styleUrl: './about-one.component.scss'
})
export class AboutOneComponent {
  aboutData = [
    {
      icon: 'shield',
      title: 'Başlık',
      desc: 'Yabancının kişisel bilgileri entegrasyon ile GöçNet Sisteminden alınacaktır.'
    },
    {
      icon: 'aperture',
      title: 'Başlık',
      desc: '•	Yabancının statüsüne bağlı olarak kimlik bilgilerine erişim sağlayabilecektir.'
    },
  ]
}
