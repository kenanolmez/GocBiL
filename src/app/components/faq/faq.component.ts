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
      title: 'GöçBil Mobil Uygulama hangi platformlarda hizmet vermektedir?',
      desc: 'GöçBil mobil uygulaması hem Android telefonlar hem de IOS telefonlar için geliştirilmiştir. Google Play Store ve App Store da uygulama yer almaktadır.'
    },
    {
      id: 2,
      title: 'GöçBil mobil uygulama üzerinden Kayıt olma işlemleri nasıl yapılır?',
      desc: 'GöçBil mobil uygulama telefonunuza indirilir. GöçBil mobil uygulama giriş sayfasında bulunan “Kayıt Ol” butonuna basılır. Kayıt Ol sayfasında istenir ise Pasaport taratılarak kullanıcı bilgileri kayıt formuna otomatik olarak getirilir. Sayfada istenen bilgiler doldurulur. Parola belirlenerek “Kayıt Ol” butonuna basılır. Not: Doğrulanmış kullanıcı işlemleri için ilgili İl Müdürlüğü’ne gidilmesi ve mobil uygulama için kullanıcı doğrulama yapılması gerekmektedir.'
    },
    {
      id: 3,
      title: 'GöçBil mobil uygulaması kaç dilde hizmet vermektedir?',
      desc: 'GöçBil mobil uygulaması 7 dilde hizmet vermektedir. GöçBil mobil uygulamasında yer alan dil seçeneklerinden ilgili seçilerek işlemlerinizi kendi dilinizde yapabilirsiniz.'
    },
    {
      id: 4,
      title: 'Canlı destek veya yardım merkezi var mı?',
      desc: 'GöçBil mobil uygulamasında yer alan YİMER modülü ile yabancılar destek alabilmektedir.'
    },
  ]

  activeTab: number = 1

  open: boolean = false

  toggle(e: any) {
    e.preventDefault()
    this.open = !this.open
  }

}
