
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  advertisements: { id: number, text: string, imageUrl: string }[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<{ id: number, text: string, imageUrl: string }[]>('assets/ads.json')
      .subscribe(data => {
        this.advertisements = data;
      });
  }
}
