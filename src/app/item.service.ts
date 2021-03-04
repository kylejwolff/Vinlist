import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';

import { Plugins, Capacitor, FilesystemDirectory } from '@capacitor/core';

import { Platform } from '@ionic/angular';

const { Filesystem, Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  public items = [];
  private SHOPPING_LIST: string = "shoppinglist";
  private platform: Platform;

  constructor(
    platform: Platform) 
    {
      this.platform = platform;
  }

  async getItems(){
    // Retrieve cached photo array data 
    const shoppingList = await Storage.get({ key: this.SHOPPING_LIST});
    this.items = JSON.parse(shoppingList.value) || [];
  }

  createItem(name){
    let randomId = Math.random().toString(36).substr(2, 5);
    this.items.push({
      'id': randomId,
      'name': name,
      'isChecked': false
    });
    Storage.set({
      key: this.SHOPPING_LIST,
      value: JSON.stringify(this.items)
    })
  }

  removeItem(item){
    console.log("remove item " + item.name);
    this.items = this.items.filter(e => e !== item);
    Storage.set({
      key: this.SHOPPING_LIST,
      value: JSON.stringify(this.items)
    })
  }
}
