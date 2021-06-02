import { PostService } from './../../../../@core/services/post.service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Post } from './../../../../@core/models/post.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-publicacoes-detail',
  templateUrl: './publicacoes-detail.component.html',
  styleUrls: ['./publicacoes-detail.component.css']
})
export class PublicacoesDetailComponent implements OnInit, OnDestroy {

  _publicacao: BehaviorSubject<Post> = new BehaviorSubject(new Post());
  publicacao$: Observable<Post> = this._publicacao.asObservable();

  // Pagination
  page = 0;
  size = 5;

  subscription: Subscription = new Subscription();

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.subscription.add(this.activatedRoute.params.subscribe((param) => this.findById(Number(param.id))));
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  findById(id: number){
    this.subscription.add(this.postService.findById(id).subscribe({
      next: publicacao => {
        this._publicacao.next(publicacao);
      }
    }));
  }

}
