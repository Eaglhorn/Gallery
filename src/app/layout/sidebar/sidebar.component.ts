import { Component, OnInit } from '@angular/core';
import {ImagesService} from '../../shared/services/images.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public mySize = '5 Mb';
  constructor() { }

  ngOnInit() {
  }

  getSize() {
  }
}
