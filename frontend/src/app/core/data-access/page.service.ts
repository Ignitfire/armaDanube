import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:5000';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private http: HttpClient) { }

  getPage(name: string): Observable<any> {
    console.log(name);
    return this.http.get(`${BASE_URL}/page`, { params: { name } });
  }

  createPage(name: string, html: string): Observable<any> {
    return this.http.post(`${BASE_URL}/page`, { name, html });
  }

  getPageNames(): Observable<any> {
    return this.http.get(`${BASE_URL}/page/names`);
  }

  deletePage(name: string): Observable<any> {
    return this.http.delete(`${BASE_URL}/page`, { params: { name } });
  }
}
