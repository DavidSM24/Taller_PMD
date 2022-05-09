import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gift-list',
  templateUrl: './gift-list.page.html',
  styleUrls: ['./gift-list.page.scss'],
})
export class GiftListPage implements OnInit {
  public searchTerm:string;
  constructor(private authS:AuthService) { }

  ngOnInit() {
  }
  public logout(){
    this.authS.logout();
  }
}
