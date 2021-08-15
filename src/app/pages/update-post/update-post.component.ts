import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';
import { Post } from 'src/app/entities/post.model';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent implements OnInit {
  post!: Post;
  id: any;
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router,
     private flashMessagesService: FlashMessagesService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.http.get('http://localhost:5000/get_post/'+ this.id).subscribe(post => {
      this.post = post
    })
  }

  save(postForm: NgForm) {
    console.log(postForm.value)
    this.http.put('http://localhost:5000/update_post/' + this.post.id, postForm.value).subscribe(res => {
      this.router.navigateByUrl('post/'+ this.post.id)
      this.flashMessagesService.show('Your Post has been Updated!', {
        classes: ['alert', 'alert-info'], // You can pass as many classes as you need
        timeout: 2000 // Default is 3000
      });
    })
  }

}
