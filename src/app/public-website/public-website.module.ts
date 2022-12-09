import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicWebsiteRoutingModule } from './public-website-routing.module';
import { SharedModule } from '../shared/shared/shared.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { HomeComponent } from '../pages/home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PublicWebsiteRoutingModule,
    SharedModule,
    LazyLoadImageModule,
    CarouselModule
  ]
})
export class PublicWebsiteModule { }
