import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  lists = this.itemService.lists

  constructor(
    public itemService: ItemService,
    private router: Router,
    public alertController: AlertController
  ) {}

  async ngOnInit(){
    this.itemService.getLists();
  }

  async presentAlertConfirm(list) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm Delete',
      message: 'Delete list ' + list.name + '?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Delete',
          handler: () => {
            console.log('Confirm Okay');
            this.removeList(list);
            this.router.navigate(['/home']);
          }
        }
      ]
    });

    await alert.present();
  }

  openNewListPage(){
    //console.log("clicked me");
    this.router.navigate(["/new-list"]);
  }

  async removeList(list){
    console.log("remove " + list.name);
    this.itemService.removeList(list);
    this.itemService.getLists();
  }

  async update(){
    this.itemService.updateLists();
  }

  goToList(list){
    this.itemService.updateCurrentIndex(list.name);
    this.router.navigate(['/list']);
  }
}

