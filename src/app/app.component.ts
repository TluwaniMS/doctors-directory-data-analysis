import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'd3-data-analysis';

  constructor(private sidebarService: NbSidebarService) {}

  displaySideBar() {
    this.sidebarService.toggle(false, 'left');
  }
}
