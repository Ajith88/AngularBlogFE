import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/entities/post.model';

@Component({
  selector: 'app-createandupdatepost',
  templateUrl: './createandupdatepost.component.html',
  styleUrls: ['./createandupdatepost.component.scss']
})
export class CreateandupdatepostComponent implements OnInit {
  post!: Post;
  constructor() { }

  ngOnInit(): void {
  }

}
