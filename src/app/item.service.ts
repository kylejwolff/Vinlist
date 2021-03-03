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

  constructor(platform: Platform) {
    this.platform = platform;
  }
}
