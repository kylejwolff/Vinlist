import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ItemService } from '../item.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.page.html',
  styleUrls: ['./new-item.page.scss'],
})
export class NewItemPage implements OnInit {

  new_item_form: FormGroup;

  constructor(
    private router: Router,
    public FormBuilder: FormBuilder,
    public itemService: ItemService
  ) { }

  ngOnInit() {
    this.new_item_form = this.FormBuilder.group({
      name: new FormControl('', Validators.required)
    })
  }

  createItem(value){
    this.itemService.createItem(value.name);
    this.new_item_form.reset();
    this.router.navigate(['/home']);
  }

}
