import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../interfaces/post.interface';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User;
  posts: Array<Post>;

  constructor(private userService: UserService, private actr: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    const userId = this.actr.snapshot.params.id;
    this.userService.userById(userId).subscribe((res: User) => this.user = res);
    this.postService.postsByUser(userId).subscribe((res: Array<Post>)=> this.posts = res);
  }

}
