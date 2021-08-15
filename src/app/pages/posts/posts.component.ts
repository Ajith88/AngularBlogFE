import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';
import { Post } from 'src/app/entities/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  //#ts-ignore
  post!: Post;
  id: any;
  constructor(private http: HttpClient, private route: ActivatedRoute,
    private flashMessagesService: FlashMessagesService, private router: Router) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('id')
    let post_id = this.route.snapshot.paramMap.get('id')
    this.http.get('http://localhost:5000/get_post/' + post_id).subscribe((post)=> {
      console.log(post)
      this.post = post
    })
  }

  deletePost() {
    this.http.delete('http://localhost:5000/delete_post/' + this.post.id).subscribe((res)=> {
      this.flashMessagesService.show('Your Post has been deleted Successfully!', {
        classes: ['alert', 'alert-info'], // You can pass as many classes as you need
        timeout: 2000 // Default is 3000
      });
      this.router.navigateByUrl('/home')
    })
  }




}
