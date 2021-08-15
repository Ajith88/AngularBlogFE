import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';
import { Post } from 'src/app/entities/post.model';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  post!: Post;

  constructor(private http: HttpClient, private flashMessagesService: FlashMessagesService
    , private router: Router) { }

  ngOnInit(): void {
  }

  save(postForm: NgForm) {
    console.log(postForm.value)
    let headers = new HttpHeaders()
    //@ts-ignore
    headers = headers.set('id', localStorage.getItem('id'))
    //@ts-ignore
    this.http.post('http://localhost:5000/new_post', postForm.value, {headers: headers}, {responseType: 'text'}).subscribe((res) => {
      this.flashMessagesService.show('Your post has been created', {
        classes: ['alert', 'alert-info'], // You can pass as many classes as you need
        timeout: 2000 // Default is 3000
      });
      this.router.navigateByUrl('home')
    })
  }

}
