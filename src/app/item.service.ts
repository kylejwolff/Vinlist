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
  public current_list: string;

  constructor(
    platform: Platform) 
    {
      this.platform = platform;
  }

  async getLists(){
    const myLists = await Storage.get({ key: this.MY_LISTS});
    this.lists = JSON.parse(myLists.value) || [];
  }

  async getItems(){
    const myItems = await Storage.get({ key: this.current_list});
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

  createItem(name){
    let randomId = Math.random().toString(36).substr(2, 5);
    this.items.push({
      'id': randomId,
      'name': name,
      'isChecked': false
    })
    this.updateItems();
  }

  removeList(list){
    console.log("remove list " + list.name);
    this.lists = this.lists.filter(e => e !== list);
    this.updateLists();
  }

  removeItem(item){
    this.items = this.items.filter(e => e !== item);
    this.updateItems();
  }

  updateLists(){
    Storage.set({
      key: this.MY_LISTS,
      value: JSON.stringify(this.lists)
    });
  }

  updateItems(){
    Storage.set({
      key: this.current_list,
      value: JSON.stringify(this.items)
    });
  }

  updateCurrentList(listName){
    this.current_list = listName;
  }
}
