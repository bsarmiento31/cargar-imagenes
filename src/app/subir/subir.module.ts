import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular'; 

import { SubirPage } from './subir.page';
import { PlaceHolderPipe } from '../pipes/place-holder.pipe';

const routes: Routes = [
  {
    path: '',
    component: SubirPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SubirPage,PlaceHolderPipe]
})
export class SubirPageModule {}
