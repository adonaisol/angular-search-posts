import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from './posts.service'
@Component({
  selector: 'mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.css'],
  providers: [PostsService]
})
export class MypostComponent implements OnInit {
  myPost : object[];
  @Input() data;
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    
  }

}
