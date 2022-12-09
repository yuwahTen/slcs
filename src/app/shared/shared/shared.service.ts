import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  apiServer = environment.apiServer

  constructor(
    public translate: TranslateService,
    public httpClient: HttpClient,
    public toastrService: ToastrService,
    public router : Router
  ) {
  }

  // public switchLanguage(language: string) {
  //   this.translate.use(language);
  //   localStorage.setItem("language", language);
  // }

  public getRequestWithParams(url: string, params: HttpParams) {
    return this.httpClient.get(this.apiServer + url, { params: params });
  }

  public getRequest(url: string) {
    return this.httpClient.get(this.apiServer + url);
  }

  public postRequest(url: string, data: any) {
    return this.httpClient.post(this.apiServer + url, data)
  }

  public postRequestParam(url: string) {
    return this.httpClient.post(this.apiServer + url, null)
  }

  public putRequest(url: string, data: any) {
    return this.httpClient.put(this.apiServer + url, data)
  }

  public putRequestParam(url: string) {
    return this.httpClient.put(this.apiServer + url, null)
  }

  public deleteRequest(url: string, data: any) {
    return this.httpClient.delete(this.apiServer + url, data)
  }

  public deleteRequestParam(url: string) {
    return this.httpClient.delete(this.apiServer + url)
  }

}
