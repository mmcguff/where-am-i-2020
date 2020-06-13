import { Component } from '@angular/core';
import { MapsService } from './maps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lat: string = '';
  lng: string = '';

  location: Object;

  constructor(private map: MapsService) {}

  ngOnInit() {


    //Best location is from the primary location service

      //secondary is from ip address that will get it close enough

      this.map.getLocation().subscribe(data => {
        this.lat = data.latitude;
        this.lng = data.longitude;

        navigator.geolocation.getCurrentPosition((position) => {
          this.lat = position.coords.latitude.toString()
          this.lng = position.coords.longitude.toString()
        });
      })
  }
}
