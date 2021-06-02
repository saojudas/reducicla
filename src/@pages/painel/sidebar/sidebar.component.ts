import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { AuthService } from 'src/@core/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  @HostListener('window:resize') onResize(){
    const w = window.innerWidth;
    if (w < 1200) {
      document.getElementById('sidebar').classList.remove('active');
    }
    else {
        document.getElementById('sidebar').classList.add('active');
    }
  }

  ngOnInit() {
    var w = window.innerWidth;
    if(w < 1200) {
        document.getElementById('sidebar').classList.remove('active');
    }
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  toggleSideBar(){
    document.getElementById('sidebar').classList.toggle('active');
  }

}
