import { Component, OnInit } from '@angular/core';
import { Validators, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ItemService } from '../item.service';

@Component({
    selector: 'app-new-list',
    templateUrl: './new-list.page.html',
    styleUrls: ['./new-list.page.scss'],
    standalone: false
})
export class NewListPage implements OnInit {

  new_list_form: UntypedFormGroup;

  constructor(
    private router: Router,
    public FormBuilder: UntypedFormBuilder,
    public itemService: ItemService
  ) { }

  ngOnInit() {
    this.new_list_form = this.FormBuilder.group({
      name: new UntypedFormControl('', Validators.required)
    })
  }

  createList(value){
    this.itemService.createList(value.name);
    this.new_list_form.reset();
    this.router.navigate(['/home']);
  }

}
