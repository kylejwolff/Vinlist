import { isEmptyExpression } from '@angular/compiler';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';

import { Plugins, Capacitor, FilesystemDirectory } from '@capacitor/core';

import { Platform } from '@ionic/angular';

const { Filesystem, Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  public lists = [];
  private MY_LISTS: string = "myLists";
  private platform: Platform;
  public current_index: any;

  constructor(
    platform: Platform) 
    {
      this.platform = platform;
  }

  async getLists(){
    const myLists = await Storage.get({ key: this.MY_LISTS});
    this.lists = JSON.parse(myLists.value) || [];
  }

  createList(name){
    let randomId = Math.random().toString(36).substr(2, 5);
    this.lists.push({
      'id': randomId,
      'name': name,
      'items': [],
      'count' : 0,
      'checked' : 0
    });
    this.updateLists();
  }

  createItem(name){
    let randomId = Math.random().toString(36).substr(2, 5);
    let list = this.lists[this.current_index];
    list.items.push({
      'id': randomId,
      'name': name,
      'isChecked': false
    })
    list.count += 1;
    this.updateLists();
  }

  removeList(list){
    console.log("remove list " + list.name);
    this.lists = this.lists.filter(e => e !== list);
    this.updateLists();
  }

  removeItem(item){
    let list = this.lists[this.current_index];
    if(item.isChecked){
      list.checked -= 1;
    }
    list.count -= 1;
    list.items = list.items.filter(e => e !== item);
    this.updateLists();
  }

  updateLists(){
    Storage.set({
      key: this.MY_LISTS,
      value: JSON.stringify(this.lists)
    });
  }

  updateCurrentIndex(listName){
    this.current_index = this.lists.findIndex(list => list.name === listName);
  }

  updateChecked(isChecked){
    let list = this.lists[this.current_index];
    if(isChecked){
      list.checked -= 1;
    }
    else{
      list.checked += 1;
    }
  }
}
