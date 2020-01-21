import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PhotosComponent} from './photos/photos.component';
import {EmptyComponent} from '../shared/components/empty/empty.component';


const routes: Routes = [
  {path: '', redirectTo: 'photos', pathMatch: 'full' },
  {path: 'photos', component: PhotosComponent},
  {path: '**', component: EmptyComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ComponentsRoutingModule {

}
