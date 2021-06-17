import { Post } from 'src/@core/models/post.model';
import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-blog-detail',
  templateUrl: './modal-blog-detail.component.html',
  styleUrls: ['./modal-blog-detail.component.css']
})
export class ModalBlogDetailComponent implements OnInit {

  @Input() post: Post = new Post();

  constructor(private modalRef: BsModalRef) { }

  ngOnInit() {
  }

  onClose(){
    this.modalRef.hide();
  }
}
