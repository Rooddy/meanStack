import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Big } from '../models/big.model';

@Injectable()
export class BigService {
  selectedBig: Big;
  bigs: Big[];
  readonly baseURL = 'http://192.168.0.22:3000/';

  constructor(private http: HttpClient) { }

  postBig(big: Big) {
    return this.http.post(this.baseURL, big);
  }

  getBigList() {
    return this.http.get(this.baseURL);
  }

  putBig(big: Big) {
    return this.http.put(this.baseURL + `/${big._id}`, big);
  }

  deleteBig(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

  getSum() {
    return this.http.get(this.baseURL + 'summary');
  }
  getSum2() {
    return this.http.get(this.baseURL + 'summary');
  }
}
