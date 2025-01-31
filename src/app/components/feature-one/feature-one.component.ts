import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Feature {
    icon: string;
    title: string;
    desc: string;
    active: boolean;
}

@Component({
  selector: 'app-feature-one',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './feature-one.component.html',
  styleUrl: './feature-one.component.scss'
})
export class FeatureOneComponent {

  feature:Feature[] = [
    {
      icon:'maximize',
      title:'Fully functional',
      desc:'The phrasal sequence of the is now so that many campaign and benefit',
      active:false
    },
    {
      icon:'pie-chart',
      title:'Secure Data',
      desc:'The phrasal sequence of the is now so that many campaign and benefit',
      active:true
    },
    {
      icon:'navigation-2',
      title:'Track Location',
      desc:'The phrasal sequence of the is now so that many campaign and benefit',
      active:false
    },
    {
      icon:'database',
      title:'Data Analyse',
      desc:'The phrasal sequence of the is now so that many campaign and benefit',
      active:true
    },
  ]
}
