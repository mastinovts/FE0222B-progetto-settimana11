import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrelloComponent } from './carrello/carrello.component';
import { DettagliComponent } from './dettagli/dettagli.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: '', component: ProductComponent
  },

  {
     path: 'products/:productId', component: DettagliComponent
  },
  {
    path: 'carrello', component: CarrelloComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
