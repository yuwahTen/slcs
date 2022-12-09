import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from '../pages/about-us/about-us.component';
import { AnnouncementDetailComponent } from '../pages/announcement-detail/announcement-detail.component';
import { AnnouncementListsComponent } from '../pages/announcement-lists/announcement-lists.component';
import { ContactUsComponent } from '../pages/contact-us/contact-us.component';
import { EnquiryQuotationFormComponent } from '../pages/enquiry-quotation-form/enquiry-quotation-form.component';
import { HomeComponent } from '../pages/home/home.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent 
  },
  {
    path : 'enquiry-quotation-form',
    component : EnquiryQuotationFormComponent 
  },
  {
    path : 'announcement-lists',
    component: AnnouncementListsComponent
  },
  {
    path : 'announcement-detail',
    component: AnnouncementDetailComponent
  },
  {
    path : 'about-us',
    component: AboutUsComponent
  },
  {
    path : 'contact-us',
    component: ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicWebsiteRoutingModule { }
