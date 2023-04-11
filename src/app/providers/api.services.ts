import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})

export class ApiServices {
  usuario: any;
  base_url = "http://127.0.0.1:8000";
  header_login = new HttpHeaders().set('Content-type', 'application/json');
  options_login = { headers: this.header_login };
  headers_token:any;
  options_token:any;

  constructor(private http:HttpClient, private  router:Router) {
  }

  login(data:any) {
    let url = `${this.base_url+'/token/'}`;
    let credenciales = JSON.stringify(data);
    return this.http.post(url, credenciales, this.options_login).pipe(catchError(this.handleError<any>()));
  }

  logOut() {
    this.usuario = null;
    this.router.navigate(['/login']);
  }

  addToken(token:string) {
    this.headers_token = new HttpHeaders().set('Content-type','application/json')
      .set('Authorization', `Token ${token}`);
    this.options_token = { headers: this.headers_token };
  }

  get(endpoint:string):Observable<any[]> {
    let url = `${this.base_url}/${endpoint}`;
    return this.http.get(url, this.options_token).pipe(catchError(this.handleError<any>()));
  }

  post(endpoint:string, data:any) {
    let url =  `${this.base_url}/${endpoint}/`;
    let datos = JSON.stringify(data);
    return this.http.post(url, datos,this.options_token).pipe(catchError(this.handleError<any>()));
  }

  update(endpoint:string, data:any, id:any) {
    let url =  `${this.base_url}/${endpoint}/${id}/`;
    let datos = JSON.stringify(data);
    return this.http.patch(url, datos,this.options_token).pipe(catchError(this.handleError<any>()));
  }

  delete(endpoint:string, id:any) {
    let url =  `${this.base_url}/${endpoint}/${id}/`;
    return this.http.delete(url, this.options_token).pipe(catchError(this.handleError<any>()));
  }


  private handleError<T>(result?:T)  {
    return (error:any): Observable<T> => {
      console.log(error.error);
      return of(result as T);
    };
  }
}
