import { Component } from '@angular/core';

export interface Post {
  date?: Date;
  title:string;
  text:string;
  id?:number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'BlogComponents';
  posts: Post[]=[{title:'Вивчаю компоненти', text:'Створюю проект "Блог"', id:1},
    {title:'Вивчаю директиви', text:'Все ще створюю "Блог"', id:2}]
  search: string = ''

  updatePosts(post:Post){
    post.id = this.posts.length + 1
    this.posts.unshift(post);
    console.log('Post',post);
  }

  deletePost(id:number){
    this.posts=this.posts.filter(p=>p.id!==id)
  }
}
