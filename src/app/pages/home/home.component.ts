import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { AboutOneComponent } from "../../components/about-one/about-one.component";
import { AboutTwoComponent } from "../../components/about-two/about-two.component";
import { FeatureTwoComponent } from "../../components/feature-two/feature-two.component";
import { ScreenshotComponent } from "../../components/screenshot/screenshot.component";
import { FaqComponent } from "../../components/faq/faq.component";
import { DownloadComponent } from "../../components/download/download.component";
import { ContactComponent } from "../../components/contact/contact.component";
import { PartnerComponent } from "../../components/partner/partner.component";
import { FooterComponent } from "../../components/footer/footer.component";

import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-index-two',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    AboutOneComponent,
    AboutTwoComponent,
    FeatureTwoComponent,
    ScreenshotComponent,
    FaqComponent,
    DownloadComponent,
    ContactComponent,
    PartnerComponent,
    FooterComponent,
    NgxTypedJsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  currentSection: string | null = 'home';
  sectionid: string | null = '';

  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    const sections = document.querySelectorAll('section');
    let scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach((section) => {
      const sectionId = section.getAttribute('id');
      this.sectionid = sectionId
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPos >= sectionTop - 50 && scrollPos < sectionTop + sectionHeight) {
        this.currentSection = sectionId;
      }
    });
  }
}
