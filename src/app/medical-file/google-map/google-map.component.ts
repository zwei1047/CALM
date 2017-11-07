import { Component, OnInit } from '@angular/core';
import { DoctorSearchService} from "../../shared/services/doctor-search.service"
import {isNumber} from "util";
import {forEach} from "@angular/router/src/utils/collection";
@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  lat: number = 50.6315144;
  lng: number = 3.056218;
  zoom: number = 8;
  response: Object[] = [] ;
  // coordonate_list =[{'lng': 50.6315,'lat': 3.056, 'display': false,'id':0},{'lng': 50.6315,'lat': 3.156, 'display': false,'id':1}];


  clikedMark(id: number): void {

    for(let temp of this.response )
    {
      if(temp['_id'] == id)
      {
        temp['isDisplay'] = true;
      }
      else
        temp['isDisplay'] = false;
    }
  }
  rechercheClick(searchText: string) :void{
    if(searchText != '')
    {
      this.response=[];
      this.searchMedecins(searchText);
      console.log(searchText);
    }
    else
    {
      console.log('ya rien');
    }
  }
  mapClick(): void{
    for(let temp of this.response )
    {
        temp['isDisplay'] = false;
    }
  }
  constructor(private DoctorSearch: DoctorSearchService) { }
  searchMedecins(searchText: string):void{
    this.DoctorSearch.getSearchDoctor(searchText).subscribe(pat => {
      console.log(pat);
      for(var i=0; i<pat.length; i ++) {
        if (pat[i].address != null)
        {
          pat[i].isDisplay=false;
          this.response.push(pat[i])
        }
      }
      this.reSetCenter();
      }
    )
  }
  reSetCenter():void{
    var _this = this;
    if(this.response.length != 0)
    {
      this.zoom = 8;
      let sumLng = 0 ;
      let sumLat = 0 ;
      for(let temp of this.response )
      {
        sumLng += temp['address'].longitude;
        sumLat += temp['address'].latitude;
      }
      this.lng = sumLng / this.response.length+0.1;
      this.lat = sumLat / this.response.length+0.1;
      console.log(this.lng);
      console.log(this.lat);
      setTimeout(function () {
        _this.zoom = 10;
        _this.lng = _this.lng-0.1;
        _this.lat = _this.lat-0.1;
      },100);
    }
    else {
      console.log(this.lng);
      console.log(this.lat);
    }

  }
  zoomChange():void{
    console.log("1111");
  }


  ngOnInit() {

  }

}
