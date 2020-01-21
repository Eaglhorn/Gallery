import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {LayoutRoutingModule} from './layout-routing.module';

import {LayoutComponent} from './layout.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HeaderComponent} from './header/header.component';




@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports     : [CommonModule, RouterModule, LayoutRoutingModule],
})

export class LayoutsModule {}
