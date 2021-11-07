import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable()
export class AuthenticationService{

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<boolean>
  {
    return this.http.post<any>(environment.apiUrl+ '/api/Login', {username, password})
      .pipe(map(response => {
        const token = response.token;

        if (token){
          localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));
          return true;
        }else{
          return false
        }
      }))
  }

  getToken(): string | null {
    const currentUser = JSON.parse(<string>localStorage.getItem('currentUser'));
    if (currentUser){
      return currentUser.token;
    }else{
      return null;
    }
  }

  getUsername(): string | null {
    const currentUser = JSON.parse(<string>localStorage.getItem('currentUser'));
    if (currentUser){
      return currentUser.username;
    }else{
      return null;
    }
  }


  logout(): void {
    localStorage.removeItem('currentUser');
  }
}
