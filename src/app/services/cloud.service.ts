import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CloudService {

  constructor(private http: HttpClient) { }

  public upload():Promise<string> {
    return new Promise(resolve => {

    const body= {
      upload_preset:"",
      file:fetch('/assets/images/logo.png')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      })
    }

    this.http.post("https://api.cloudinary.com/v1_1/duq0pz1vi/image/upload", body).subscribe((data: any) => {

      console.log(data);

      resolve(data);
    }, error => {
      console.log(error);
      resolve(error);
    });
  });
}

}
