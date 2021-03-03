import { Component } from '@angular/core';

import { ItemService } from '../item.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items = [
    {"title":"meat","description":"good"},
    {"title":"meat2","description":"good"},
    {"title":"meat3","description":"good"},
  ]

  constructor(
    public itemService: ItemService
  ) {}

}
