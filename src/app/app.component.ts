import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      
      this.authenticationService.authenticationState.subscribe(checked => {
        this.authenticationService.authenticationState.subscribe(state => {
          if(checked){
            if (state) {
              console.log("AQUIII? 1");
              this.router.navigate(['tabs', 'historias']);
            } else {
              console.log("AQUIII? 2");
              this.router.navigate(['login']);
            }
          }
        });
      });
      //this.splashScreen.hide();
    });
  }
}

