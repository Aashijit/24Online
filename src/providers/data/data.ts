import { Codes } from './../../Utils/Codes';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import { Http,Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpProvider {

  constructor(private http: Http,public codes : Codes, 
    private httpClient : HttpClient) {
  }

  /**
   * 
   * @param data  the json data
   * @param apiName the api name
   */
  callApi(data,apiName) {
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Username','avijit.ghosh');
      headers.append('Password','avijit.ghosh');
      var ipAddress = localStorage.getItem(this.codes.LSK_IPADDRESS);
      this.http.post(this.codes.API_ENDPOINT+ipAddress+apiName, JSON.stringify(data)
        , {headers: headers}).map(res => res.json())
        .subscribe((data:any) => {
            console.log(data);
            resolve(data);
          },
          err => {
            console.log(err);
            resolve({status: this.codes.API_ERROR});
          }
        );
      
    });
  }




  uploadFile(data,apiName) {
    return new Promise(resolve => {

      this.httpClient.post(this.codes.API_ENDPOINT+apiName, data).subscribe(
        (res) => {

          console.log("Success: " + JSON.stringify(res))
          resolve(res);
        },
        (err) => {
          console.log(err);
          resolve(err);
        }
    );
      
    });
  }



  isNullOrEmpty(str) {
    return typeof str === 'undefined' || str === null || (typeof str === 'string' && str.length <= 0);
  }

  convertToArray(object) {
    if (this.isArray(object))
      return object;
    else
      return [object];
  }

  isArray(object) {

    if (typeof object === 'undefined')
      return false;
    return Object.prototype.toString.call(object).slice(8, -1) === 'Array';
  }


}