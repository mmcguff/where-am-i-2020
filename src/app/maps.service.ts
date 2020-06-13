import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface Location {
  latitude: string;
  longitude: string;
}


@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) {}

  getLocation(){
    return this.http.get<Location>('https://ipapi.co/json?access_key=af04758ce58481bcf8dfe9e8fc376891');
  }
}
