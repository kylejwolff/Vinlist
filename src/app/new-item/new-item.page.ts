import { Component, OnInit } from '@angular/core';
import { Validators, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ItemService } from '../item.service';

@Component({
    selector: 'app-new-item',
    templateUrl: './new-item.page.html',
    styleUrls: ['./new-item.page.scss'],
    standalone: false
})
export class NewItemPage implements OnInit {

  new_item_form: UntypedFormGroup;

  constructor(
    private router: Router,
    public FormBuilder: UntypedFormBuilder,
    public itemService: ItemService
  ) { }

  ngOnInit() {
    this.new_item_form = this.FormBuilder.group({
      name: new UntypedFormControl('', Validators.required)
    })
  }

  createItem(value){
    this.itemService.createItem(value.name);
    this.new_item_form.reset();
    this.router.navigate(['/list']);
  }

}
