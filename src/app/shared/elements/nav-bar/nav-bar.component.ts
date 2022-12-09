import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../shared/shared.service';
// import { LanguageList } from 'src/assets/data/config/language-config';
// import { Language } from '../../../public_website/DTO/config/language-config.dto';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Menu } from '../../../DTO/config/menu.dto';
import { MenuList } from '../../../../assets/data/menu/menu';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  routeLink: string = "";
  activeLanguageMenu: boolean = true;
  sidebar: boolean = false;
  account: boolean = false;
  innerWidth = window.innerWidth
  menuList: Menu[] = MenuList;
  private element: any;

  constructor(private _shared: SharedService, private router: Router, private activeRoute: ActivatedRoute, private location: Location, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngAfterContentChecked() {
    this.routeLink = this.location.path();
  }

  showSideBar() {
    this.sidebar = !this.sidebar;
    
  }

  closeSideBar() {
    this.sidebar = false;
    //document.body.classList.remove('style-modal-open');
  }

  goToAdmin() {
    if (this.innerWidth <= 768) {
      this._shared.router.navigate(['/admin']);
      this.closeSideBar();
    }
  }

  // ngAfterContentChecked() {
  //   this.routeLink = this.location.path();
  //   this.userData = JSON.parse(localStorage.getItem("userData") || '{}')[0];
  //   if (localStorage.getItem("account")) {
  //     if (localStorage.getItem("account") || null == "true") {
  //       this.account = true
  //     } else {
  //       this.account = false
  //     }
  //   } else {
  //     this.account = false
  //   }
  // }

  ngOnInit(): void {
    this.element.addEventListener('click', (el: { target: { className: string; }; }) => {
      if (el.target.className.includes('nav-sidebar-background')) {
        this.closeSideBar();
      }
    });
    // if (this.innerWidth < 768) {
    //   this.closeSideBar();
    // }
    // if (this.innerWidth < 768) {
    //   this.sidebar = false
    // }
    // if(this.innerWidth <= 768){
    //   this.sidebar = false
    // }
    
  }

  // setLanguage(language: any) {
  //   this._shared.switchLanguage(language.id);
  //   this.active_language = language.display_name
  // }

  navigate(route: any, param: any) {
    if (param == '') {
      this.router.navigate(['/' + route])
    } else {
      this.router.navigate(
        ['/' + route],
        { queryParams: { saletype: param } }
      );
    }
    this.closeSideBar();
  }



  // showLanguageMenu() {
  //   if (this.innerWidth <= 768) {
  //     this.activeLanguageMenu = !this.activeLanguageMenu;
  //   }
  // }



}

