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
      title: 'Başlık',
      desc: 'lorem ipsum dolor sit amet'
    },
    {
      icon: 'feather',
      title: 'Başlık',
      desc: 'lorem ipsum dolor sit amet'
    },
    {
      icon: 'eye',
      title: 'Başlık',
      desc: 'lorem ipsum dolor sit amet'
    },
  ]
  feature2: Feature2[] = [
    {
      icon: 'user-check',
      title: 'Başlık',
      desc: 'lorem ipsum dolor sit amet'
    },
    {
      icon: 'smartphone',
      title: 'Başlık',
      desc: 'lorem ipsum dolor sit amet'
    },
    {
      icon: 'heart',
      title: 'Başlık',
      desc: 'lorem ipsum dolor sit amet'
    },
  ]
}
