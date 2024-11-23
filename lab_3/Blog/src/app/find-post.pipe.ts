import {Input, Pipe, PipeTransform} from "@angular/core";
import {Post} from "./app.component";


@Pipe({
  name: 'find',
  pure: false
})
export class FindPostPipe implements PipeTransform{

  transform(posts: Post[], search:string=''): Post[] {
    if (!search.trim()){
      return posts;
    }
    return posts.filter(post=>
    {return post.title.toLowerCase().includes(search.toLowerCase())})
  }
}
