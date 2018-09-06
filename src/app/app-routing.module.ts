import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './components/items.component';
import { InfoComponent } from './components/info.component';
import { CategoryComponent } from './components/category.component';

const appRoutes: Routes = [
  { path: '', component: CategoryComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'items/:categoryName', component: ItemsComponent },
  { path: 'info/:itemName', component: InfoComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
