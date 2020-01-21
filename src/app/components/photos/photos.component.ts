import { Component, OnInit } from '@angular/core';
import {ImagesService} from '../../shared/services/images.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  public images = [];

  constructor(public imgService: ImagesService) { }

  ngOnInit() {
    this.imgService.getImages().subscribe(res => this.images = res['images']);
  }

  sortMe(type?) {
    return this.imgService.transform(this.images, type);
  }

}
