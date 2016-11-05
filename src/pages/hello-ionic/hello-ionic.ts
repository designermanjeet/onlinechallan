import {Component} from '@angular/core';
import { App, MenuController} from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import {Platform} from 'ionic-angular';

@Component({
  templateUrl: 'hello-ionic.html'
})


export class HelloIonicPage {
  constructor(app: App, menu: MenuController, public navCtrl: NavController, platform: Platform) {
    menu.enable(true);
    
    platform.ready().then((readySource) => {
      console.log('Width: ' + platform.width());
      console.log('Height: ' + platform.height());
    });
    
   // document.querySelector('#yoman').style.height(platform.height());
    
    
  }
  
  pet: string = "login";
  isAndroid: boolean = false;
  
  goToAboutPage() {
    this.navCtrl.push(AboutPage);
  }
   
  goToHomePage() {
    this.navCtrl.push(HomePage);
  }
  
    public height: '500';
  
}
