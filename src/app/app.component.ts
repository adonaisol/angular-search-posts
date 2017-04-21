import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { SearchPipe } from './search.pipe'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostsService],
  //pipes: [SearchPipe]
})
export class AppComponent {
  //title = 'app works!';
  myPost : object[];
  constructor(private postsService: PostsService) { }
 
  ngOnInit() {
    this.postsService.getPosts().subscribe(
      (response) => {
        this.myPost = response.json();
        console.dir(this.myPost)
      }
    )
  }
}
