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
  public lists = [];
  private MY_LISTS: string = "myLists";
  private platform: Platform;

  constructor(
    platform: Platform) 
    {
      this.platform = platform;
  }

  async getLists(){
    const myLists = await Storage.get({ key: this.MY_LISTS});
    this.lists = JSON.parse(myLists.value) || [];
  }

  async getItems(name){
    const myItems = await Storage.get({ key: name});
    this.items = JSON.parse(myItems.value) || [];
  }

  createList(name){
    let randomId = Math.random().toString(36).substr(2, 5);
    this.lists.push({
      'id': randomId,
      'name': name
    });
    this.updateLists();
  }

  removeList(list){
    console.log("remove list " + list.name);
    this.lists = this.lists.filter(e => e !== list);
    this.updateLists();
  }

  removeItem(listName, item){
    this.items = this.items.filter(e => e !== item);
    this.updateItems(listName);
  }

  updateLists(){
    Storage.set({
      key: this.MY_LISTS,
      value: JSON.stringify(this.lists)
    });
  }

  updateItems(listName){
    Storage.set({
      key: listName,
      value: JSON.stringify(this.items)
    });
  }

  createItem(value){}
}
