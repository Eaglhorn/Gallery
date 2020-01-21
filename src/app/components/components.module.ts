import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {ComponentsRoutingModule} from './components-routing.module';


import {PhotosComponent} from './photos/photos.component';


@NgModule({
  declarations: [
    PhotosComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ComponentsRoutingModule,
  ],
})

export class ComponentsModule {}
