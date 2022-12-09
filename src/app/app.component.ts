import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SharedService } from './shared/shared/shared.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CPI';
  defaultLanguage : string = environment.defaultLanguage;
  routeLink : string = "";

  constructor(
    private shared_ : SharedService,
    private location : Location
    ) {
    this.initialLoad();
  }

  ngAfterContentChecked() {
    this.routeLink = this.location.path();
  }

  initialLoad(){
  }

  onActivate(event : any) {
    window.scroll(0,0);
    document.body.classList.remove('style-modal-open');
  }
}
