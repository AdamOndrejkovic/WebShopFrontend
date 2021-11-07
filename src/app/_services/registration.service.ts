import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable()
export class RegistrationService{
  constructor(private http: HttpClient) {
  }

  register(username: string, password: string, email : string) :  Observable<boolean>
  {
    return this.http.post<any>(environment.apiUrl + '/RegisterUser',
      {username, email, password})
      .pipe(map(response =>{
        return response.Ok;
      }))
  }
}
