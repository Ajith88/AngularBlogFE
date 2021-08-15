import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/entities/user.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  user!: User;
  constructor(private http: HttpClient) {
     const id = localStorage.getItem('id')
    //@ts-ignore
    this.http.get('http://localhost:5000/account/' + id).subscribe((user)=> {
      //@ts-ignore
      console.log(user?.user?.email)
      //@ts-ignore
      this.user = user?.user
    })
  }


  ngOnInit(): void {

  }
  //@ts-ignore
  @ViewChild("image_file") image_file;

  save(user: NgForm) {
    let fi = this.image_file.nativeElement;
    if (fi.files && fi.files[0]) {
        let fileToUpload = fi.files[0];
        this
            .upload(fileToUpload, user.value)
            .subscribe(res => {
              window.location.reload()
            },error => {
              console.log(error)
            });
        }
  }

  upload(fileToUpload: any, user: any) {
    const id = localStorage.getItem('id')
    let input = new FormData();
    input.append("file", fileToUpload);
    input.append('email', user.email)
    input.append('userName', user.userName)
    console.log(input.getAll)
    return this.http.post('http://localhost:5000/account/'+ id, input,
    {headers: new HttpHeaders({'Accept': 'multipart/form-data'})});
}

}
