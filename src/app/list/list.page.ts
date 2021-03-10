import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ItemService } from '../item.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  items = this.itemService.items
  current_list:any;

  constructor(
    public itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      param => {
        this.current_list = param;
      }
    )
    this.itemService.getItems(this.current_list.name);
  }

  openNewItemPage(){
    this.router.navigate(["/new-item"]);
  }

  async removeItem(listName, item){
    this.itemService.removeItem(listName, item);
  }
}
