import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Feature1 {
  icon: string;
  title: string;
  desc: string;
}
interface Feature2 {
  icon: string;
  title: string;
  desc: string;
}
@Component({
  selector: 'app-feature-two',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './feature-two.component.html',
  styleUrl: './feature-two.component.scss'
})
export class FeatureTwoComponent {
  feature1: Feature1[] = [
    {
      icon: 'monitor',
      title: 'Bildirim Yükümlülüğü ',
      desc: 'o	GöçBil mobil uygulamasında yer alan “Bildirim Yükümlülüğü Modülü” ile; bildirim yükümlülüğüne tabii yabancıların İl Göç İdaresi Müdürlüklerine gitmesine gerek kalmaksızın yüz tanıma, konum tespiti ile GöçBil Mobil Uygulaması üzerinden bildirim yükümlülüğünü yerine getirebilmektedir.'
    },
    {
      icon: 'feather',
      title: 'Randevu İşlemleri',
      desc: 'lorem ipsum dolor sit amet'
    },
    {
      icon: 'eye',
      title: 'Yol İzin Belgesi İşlemleri',
      desc: 'lorem ipsum dolor sit amet'
    },
  ]
  feature2: Feature2[] = [
    {
      icon: 'user-check',
      title: 'Evlenme Ehliyet Belgesi İşlemleri',
      desc: 'lorem ipsum dolor sit amet'
    },
    {
      icon: 'smartphone',
      title: 'Tanıtım Kart',
      desc: 'lorem ipsum dolor sit amet'
    },
    {
      icon: 'heart',
      title: 'YİMER',
      desc: 'lorem ipsum dolor sit amet'
    },
  ]
}
