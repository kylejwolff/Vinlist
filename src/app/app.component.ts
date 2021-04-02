import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private menu: MenuController,              
    private router: Router
  ) {}

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  goToSettings(){
    this.router.navigate(['/settings']);
    this.menu.close();
  }

  goToAbout(){
    this.router.navigate(['/about']);
    this.menu.close();
  }
}
