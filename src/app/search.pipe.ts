import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  /*transform(value: any, args: string[]): any {
    //return null;
    let filter = args[0].toLocaleLowerCase();
    return filter ? value.filter(filter=>filter.title.toLocaleLowerCase().indexOf(filter) != -1) : value
  }*/
  posts;
  newposts = [];
  transform(posts, value) {
    this.posts = posts;
    this.newposts = [];
    this.search(value);
    return this.newposts;
  }
  search(value: string ) {
    console.log(value);
      for ( const key in this.posts) {
      if( this.posts[key].title.indexOf(value) >= 0  || value.length === 0) {
        this.newposts.push(this.posts[key]);
      }
    }
  }
}
