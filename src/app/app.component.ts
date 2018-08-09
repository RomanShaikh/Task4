import { Component } from '@angular/core';

interface mark{
  lat:number;
  lng:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  markers:mark[]; 
  constructor() {
    this.markers = [];
  }
  public tableTxt="Generate Table";
  markerLength=0;
  public renderOptions = {
    suppressMarkers: true,
  }
  isGenerate:boolean;
  btnTable:boolean;
  public markerOptions = {
  origin: {
      icon: 'https://i.imgur.com/7teZKif.png',
  },
  destination: {
      icon: 'https://i.imgur.com/7teZKif.png',
  }
}
  public origin: {}
  public destination: {}

onClick(obj: {lat: number, lng: number}) {
    this.markers.push({
      lat: obj.lat,
      lng: obj.lng
  });
    this.generateMap();
  }

  mapClicked($event) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng
    });
    this.generateMap();
  }

  generateMap(){
    this.markerLength+=1;
    if(this.markerLength>=2){
      this.isGenerate=true;
    }
  }
  generateTable(){
    this.btnTable=!this.btnTable;
    if(this.btnTable!=true){
      this.tableTxt="Generate Table";  
    }else{
      this.tableTxt="Hide Table";
    }
    
  }
}
