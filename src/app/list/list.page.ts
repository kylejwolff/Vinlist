import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ItemService } from '../item.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  list: any;
  current_index: any;

  constructor(
    public itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.current_index = this.itemService.current_index;
    console.log("current list is: ", this.current_index)
    this.list = this.itemService.lists[this.current_index];
    console.log(this.list);
  }

  updateChecked(isChecked){
    this.itemService.updateChecked(isChecked);
  }

  updateItems(){
    this.itemService.updateLists();
  }

  openNewItemPage(){
    this.router.navigate(["/new-item"]);
  }

  async removeItem(item){
    this.itemService.removeItem(item);
  }
}
