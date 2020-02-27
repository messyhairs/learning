import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class NodeService {
    public baseurl = `http://localhost:3000/jsondatas`;
    constructor(private http: HttpClient) { }

    getsampledata() {
        return this.http.get(`${this.baseurl}`);
  }
}
