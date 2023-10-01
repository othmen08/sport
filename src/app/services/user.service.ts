import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURL:string="http://localhost:3000/api/users"

  constructor(private http:HttpClient) { }

  // user={email,pwd}
login(user){
return this.http.post<{userToSend:any, msg:any}>(this.userURL+"/login",user);
}
signup(user,img:File){
  let formData = new FormData();
   // comment remplir le formData
   formData.append("firstName",user.firstName);
   formData.append("lastName",user.lastName);
   formData.append("email",user.email);
   formData.append("pwd",user.pwd);
   formData.append("role",user.role);
   formData.append("img",img);

  return this.http.post<{msg:boolean}>(this.userURL+"/signup",formData);
 
}
editProfile(newUser){
return this.http.put(this.userURL,newUser);
}
displayUser(id){
  return this.http.get<{user: any}>(`${this.userURL}/profile/${id}`); 
}

updateUser(userObj){
  return this.http.put<{isUpdated:boolean}>(this.userURL,userObj);
}
}
