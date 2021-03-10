import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewListPageRoutingModule } from './new-list-routing.module';

import { NewListPage } from './new-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NewListPageRoutingModule
  ],
  declarations: [NewListPage]
})
export class NewListPageModule {}
