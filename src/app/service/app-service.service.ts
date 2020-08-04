import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private httpClient: HttpClient) {

   }
    savePost(message:string, file:File, email:string) {
    const url = `http://localhost:3000/submit`;
    const formData: FormData = new FormData();
    formData.append('Files', file, file.name);
    formData.append('message',message);
    formData.append("email",email)
    this.httpClient.post(url, formData).toPromise();
   }
   getPosts() {
    const url = `http://localhost:3000/posts`;
    return this.httpClient.get<any[]>(url).toPromise();
   }
   verifyUser(email, password) {
      const url = `http://localhost:3000/verifyuser/${email}/${password}`;
      return this.httpClient.get(url).toPromise();
   }
}
