import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModuleModule } from './home-module/home-module.module';
import { HomeModuleComponent } from './home-module/home-module/home-module.component';

const routes: Routes = [{
  path: '', redirectTo: 'home', pathMatch: 'full'
}
  , {
  path: 'home',
  loadChildren: ()=>import('./home-module/home-module.module').then(m=>m.HomeModuleModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
