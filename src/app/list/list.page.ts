import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ItemService } from '../item.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  items: any;
  current_list: string;

  constructor(
    public itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.current_list = this.itemService.current_list;
    console.log("current list is: ", this.current_list)
    this.itemService.getItems();
    this.items = this.itemService.items;
    console.log(this.items);
  }

  updateItems(){
    this.itemService.updateItems();
  }

  openNewItemPage(){
    this.router.navigate(["/new-item"]);
  }

  async removeItem(item){
    this.itemService.removeItem(item);
  }
}
