import { Component, OnInit } from '@angular/core';
import { Subscription, BehaviorSubject, Observable } from 'rxjs';

// Interfaces
import { ResponsePageable } from 'src/@core/interfaces/response-pageable.interface';

// Services
import { PostService } from 'src/@core/services/post.service';

// Models
import { Post } from 'src/@core/models/post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  _publicacoes: BehaviorSubject<ResponsePageable<Post>> = new BehaviorSubject({} as ResponsePageable<Post>);
  publicacoes$: Observable<ResponsePageable<Post>> = this._publicacoes.asObservable();


  subscription: Subscription = new Subscription();

  // Utils
  semImagemUrl = '../../../assets/images/sem-imagem.jpg';

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.subscription.add(this.postService.findAll(0, 4).subscribe({
      next: publicacoes => {
        this._publicacoes.next(publicacoes)
      }
    }))
  }

}
