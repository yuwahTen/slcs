import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import {HttpClientModule, HttpClient , HTTP_INTERCEPTORS} from '@angular/common/http';
import { HttpConfigInterceptor } from './shared/httpconfig.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponent } from './services/shared/shared.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { SharedModule } from './shared/shared/shared.module';
import { EnquiryQuotationFormComponent } from './pages/enquiry-quotation-form/enquiry-quotation-form.component';
import { AnnouncementListsComponent } from './pages/announcement-lists/announcement-lists.component';
import { AnnouncementDetailComponent } from './pages/announcement-detail/announcement-detail.component';
import { UploadImagesComponent } from './elements/upload-images/upload-images.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http , './assets/data/languages/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    EnquiryQuotationFormComponent,
    AnnouncementListsComponent,
    AnnouncementDetailComponent,
    UploadImagesComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      },
      defaultLanguage: "en"
  }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
