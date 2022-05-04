import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolderComponent } from './components/holder/holder.component';
import { MovementListComponent } from './components/movement-list/movement-list.component';
import { MovementNewComponent } from './components/movement-new/movement-new.component';

const routes: Routes = [
  {
    path: 'movement-new',
    component: MovementNewComponent
  },
  {
    path: 'movements',
    component: MovementListComponent
  },
  {
    path: 'holders',
    component: HolderComponent
  },
  {
    path: '',
    redirectTo: 'movements',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
