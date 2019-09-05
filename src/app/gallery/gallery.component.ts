import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/services/gallery.service';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { DetailPhotoComponent } from '../detail-photo/detail-photo.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  numberPage: number = 0;
  totalePages: number = 0;
  totalPhotos: number = 0;
  dataPhotos: any;
  pages: Array<number> = [];
  currentPage: number = 1;
  keyWord: string = "";
  numberPhotosPerPage: number = 12;
  isSearched: boolean;

  constructor(private galleryService: GalleryService, private modalService: NgbModal) { }

  ngOnInit() {
    this.isSearched = false;
  }

  onSearch(data) {
    this.galleryService.search(data.keyWord, this.numberPhotosPerPage, this.currentPage)
      .subscribe(data => {
        this.dataPhotos = data.hits;
        this.totalPhotos = data.totalHits;
        //compute number of pages
        this.totalePages = Math.floor(data.totalHits / this.numberPhotosPerPage);
        if (data.totalHits % this.numberPhotosPerPage != 0)++this.totalePages;

        this.pages = new Array(this.totalePages);
      }, err => console.log(err));
      this.isSearched = true;
  }

  goToPage(index: number) {
    this.currentPage = index + 1;
    this.onSearch({ keyWord: this.keyWord });
  }

  openDetailPhotoModal(id: string) {
    const modalRef = this.modalService.open(DetailPhotoComponent, { size: 'sm' });
    modalRef.componentInstance.id = id;

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((err) => {
      console.log(err);
    });
  }
}
