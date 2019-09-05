import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultModel } from 'src/models/result.model';
import { map } from 'rxjs/operators';

@Injectable()
export class GalleryService {

    private baseUrl = "https://pixabay.com/api/?key=5832566-81dc7429a63c86e3b707d0429&q=";

    constructor(private http: HttpClient) {}

    search(keyWord:string, numberPhotosPerPage:number, currentPage:number) {
       return  this.http.get(this.baseUrl + keyWord
          + "&per_page=" + numberPhotosPerPage
          + "&page=" + currentPage)
          .pipe(map((result: Response) => new ResultModel().deserialize(result)))
      }

      getDetailPhotoById(id:number) {
        return  this.http.get(this.baseUrl 
            + "&id=" + id)
            .pipe(map((result: Response) => new ResultModel().deserialize(result)))
      }
}