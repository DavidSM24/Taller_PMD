import { Component } from '@angular/core';
import { NavControlService } from '../services/nav-control.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public navC:NavControlService) {}

}
