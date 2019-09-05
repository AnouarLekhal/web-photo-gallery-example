import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GalleryService } from 'src/services/gallery.service';


@Component({
  selector: 'app-detail-photo',
  templateUrl: './detail-photo.component.html',
  styleUrls: ['./detail-photo.component.css']
})
export class DetailPhotoComponent implements OnInit {

  @Input() public id:number;
  detailPhoto: any = [];

  constructor(public activeModal: NgbActiveModal, private galleryService: GalleryService) {}

  ngOnInit() {
    this.getDetailPhotoById(this.id);
  }

  getDetailPhotoById(id: number) {
    this.galleryService.getDetailPhotoById(id).subscribe(data => {
      this.detailPhoto = data.hits[0];
    }, err => console.log(err));
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }
}
