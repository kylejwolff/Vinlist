import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ItemService } from '../item.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items = this.itemService.items

  constructor(
    public itemService: ItemService,
    private router: Router
  ) {}

  async ngOnInit(){
    this.itemService.getItems();
  }


  openNewItemPage(){
    console.log("clicked me");
    this.router.navigate(["/new-item"]);
  }

  async removeItem(item){
    console.log("remove " + item.name);
    this.itemService.removeItem(item);
    this.itemService.getItems();
  }
}

