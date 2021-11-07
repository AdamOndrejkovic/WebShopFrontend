import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {Injectable} from "@angular/core";

@Injectable()
export class RegistrationService {

  constructor(private http: HttpClient) {
  }

  getAllProducts() : Observable<boolean>
  {
    return this.http.post<any>(environment.apiUrl + '/Products', {})
      .pipe(map(response => {
        return response.Ok;
      }));
  }

}
