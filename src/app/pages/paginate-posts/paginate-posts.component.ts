import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/entities/post.model';

@Component({
  selector: 'app-paginate-posts',
  templateUrl: './paginate-posts.component.html',
  styleUrls: ['./paginate-posts.component.scss']
})
export class PaginatePostsComponent implements OnInit {

  posts: Post[] = [];
  pages:any;
  page: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:5000/get_posts/' + 1).subscribe((posts: any) => {
      //ts-ignore
      console.log(posts)
      this.posts =  posts.posts
      console.log(posts.pages)
      this.pages = posts.pages
      this.page = posts.page
    })
  }
  getPosts(input: any) {
    this.http.get('http://localhost:5000/get_posts/' + input.value).subscribe((posts: any) => {
      //ts-ignore
      console.log(input.value)
      this.posts =  posts.posts
      this.pages = posts.pages
      this.page = posts.page
    })
  }

  getPreviousPosts() {
    const page=this.page - 1
    this.http.get('http://localhost:5000/get_posts/' + page).subscribe((posts: any) => {
      this.posts =  posts.posts
      this.pages = posts.pages
      this.page = posts.page
    })
  }

  getNextPosts() {
    const page=this.page +1
    this.http.get('http://localhost:5000/get_posts/' + page).subscribe((posts: any) => {
      this.posts =  posts.posts
      this.pages = posts.pages
      this.page = posts.page
    })
  }
}
