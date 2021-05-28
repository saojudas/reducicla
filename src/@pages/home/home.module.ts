import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { BannerHeroComponent } from './banner-hero/banner-hero.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeComponent, HeaderComponent, BannerHeroComponent, AboutComponent, ServicesComponent, BlogComponent, ContactComponent, FooterComponent
  ]
})
export class HomeModule { }
