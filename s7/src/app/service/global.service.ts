import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() {
   }

  getCurrentLocation() {
    console.log("test")
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            if (position) {
              console.log(
                'Latitude: ' +
                  position.coords.latitude +
                  'Longitude: ' +
                  position.coords.longitude
              );
              let lat = position.coords.latitude;
              let lng = position.coords.longitude;

              const location = {
                lat,
                lng,
              };
              resolve(location);
            }
          },
          (error) => console.log(error)
        );
      } else {
        reject('Geolocation is not supported by this browser.');
      }
    });
  }

  setLang(lang: any) {
    let htmlElement = document.querySelector('html')
    let bootstrapLink: any = document.getElementById('bootstrap_link')
    if (lang == 'en') {
      bootstrapLink?.setAttribute('href', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css')
      htmlElement?.setAttribute('lang', 'en')
      htmlElement?.setAttribute('dir', 'ltr')
      // window.location.reload()

    }
    else {
      bootstrapLink?.setAttribute('href', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css')
      htmlElement?.setAttribute('lang', 'ar')
      htmlElement?.setAttribute('dir', 'rtl')
      // window.location.reload()

    }
  }
}
