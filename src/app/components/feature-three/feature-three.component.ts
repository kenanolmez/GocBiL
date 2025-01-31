import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
  selector: 'app-feature-three',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './feature-three.component.html',
  styleUrl: './feature-three.component.scss'
})
export class FeatureThreeComponent {
  feature1:Feature1[] = [
    {
      icon:'monitor',
      title:'Use On Any Device',
      desc:'One disadvantage of Lorum Ipsum is that in Latin frequently than others'
    },
    {
      icon:'feather',
      title:'Feather Icons',
      desc:'One disadvantage of Lorum Ipsum is that in Latin frequently than others'
    },
    {
      icon:'eye',
      title:'Retina Ready',
      desc:'One disadvantage of Lorum Ipsum is that in Latin frequently than others'
    },
  ]
  feature2:Feature2[] = [
    {
      icon:'user-check',
      title:'W3c Valid Code',
      desc:'One disadvantage of Lorum Ipsum is that in Latin frequently than others'
    },
    {
      icon:'smartphone',
      title:'Fully Responsive',
      desc:'One disadvantage of Lorum Ipsum is that in Latin frequently than others'
    },
    {
      icon:'heart',
      title:'Browser Compatibility',
      desc:'One disadvantage of Lorum Ipsum is that in Latin frequently than others'
    },
  ]
}
