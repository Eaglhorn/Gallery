import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {CommonModule} from '@angular/common';
import {ImagesService} from './services/images.service';
import {EmptyComponent} from './components/empty/empty.component';


@NgModule({
  declarations: [EmptyComponent],
  imports: [RouterModule, CommonModule],
  providers: [ImagesService],
})

export class SharedModule {}
