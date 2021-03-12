import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ItemService } from '../item.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lists = this.itemService.lists

  constructor(
    public itemService: ItemService,
    private router: Router
  ) {}

  async ngOnInit(){
    this.itemService.getLists();
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
    this.itemService.updateCurrentList(list.name);
    this.router.navigate(['/list']);
  }
}

