import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MovieProvider {
  caminhoAPi = "https://api.themoviedb.org/3/movie";
  constructor(public http: Http) {
    alert('Hello MovieProvider Provider');
  }

  getUltimoFilme() {
    return this.http.get(this.caminhoAPi + "/popular?api_key=4047f34f3ec37c5374a98422bbde30fb");
  }
}
