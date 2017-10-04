import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  lat: number = 50.6315144;
  lng: number = 3.056218;

  constructor() { }

  ngOnInit() {
  }

}
