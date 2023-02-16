import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./core/components/home/home.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((x) => x.ProductsModule),
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.module').then((x) => x.CustomersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
