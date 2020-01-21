import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout.component';


const routes: Routes = [
  {path: '', component: LayoutComponent,
    loadChildren: () => import('../components/components.module').then(mod => mod.ComponentsModule)},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LayoutRoutingModule {

}
