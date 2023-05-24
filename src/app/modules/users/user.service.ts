import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   user: User[];
   formData: User = new User();
   data:any;

  constructor(private httpClient: HttpClient,private router: Router) { }

  BindListUsers() {
    this.httpClient.get(environment.apiUrl)
      .toPromise().then(response => {
        this.user = response as User[]
      });

}
insertUser(stf: User): Observable<any> {
  return this.httpClient.post('  http://localhost:3000/users', stf );
}
// http://localhost:3000/
updateUser(stf: User): Observable<any> {
  return this.httpClient.put(environment.apiUrl+'/'+stf.id, stf);
}

getUser(userId: string): Observable<any> {
  return this.httpClient.get(environment.apiUrl + "/" + userId);
}

deleteUser(userId: string) {
  return this.httpClient.delete(environment.apiUrl + "/" + userId)
}

authenticate(name: string, password: string): Observable<any> {
  const value = this.httpClient.get<any>(environment.apiUrl).subscribe(res => {
    const user = res.find((a: any) => { return a.username === name && a.password === password })
    this.data = user
    if (user) {
      alert("Login success!!!");
      this.router.navigate(['home']);
      this.data = user
      console.log(this.data)
    }else{
      alert("Invalid credentials!!!");
      this.router.navigate(['']);
    }
         
  });
  return this.data;
}
}
