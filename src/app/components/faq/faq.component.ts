import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CountUpModule } from 'ngx-countup';

interface FaqData {
  id: number;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    CountUpModule
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

  faqData: FaqData[] = [
    {
      id: 1,
      title: 'SORU ?',
      desc: 'CEVAP buraya gelecek'
    },
    {
      id: 2,
      title: 'SORU ?',
      desc: 'CEVAP buraya gelecek'
    },
    {
      id: 3,
      title: 'SORU ?',
      desc: 'CEVAP buraya gelecek'
    },
    {
      id: 4,
      title: 'SORU ?',
      desc: 'CEVAP buraya gelecek'
    },
  ]

  activeTab: number = 1

  open: boolean = false

  toggle(e: any) {
    e.preventDefault()
    this.open = !this.open
  }

}
