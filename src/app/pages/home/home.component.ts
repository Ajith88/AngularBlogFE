import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts = [
    {
      'author': 'Corey Schafer',
      'title': 'Blog Post 1',
      'content': 'First Post Content',
      'date_posted': 'April 20, 2018'
    },
    {
      'author': 'Jane Doe',
      'title': 'Blog Post 2',
      'content': 'Second Post Content',
      'date_posted': 'April 21, 2018'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
