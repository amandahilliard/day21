import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../interfaces/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
post: Post;
  constructor(private postService: PostService, private actr: ActivatedRoute) { }

  ngOnInit(): void {
    const postId = this.actr.snapshot.params.id;
    this.postService.postsById(postId).subscribe((res: Post)=> this.post = res)
;  }

}
