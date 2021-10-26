import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { NbMenuItem } from '@nebular/theme';
import { MenuItems } from 'src/app/models/view-supporting-models/main-side-panel-menu-items.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  MenuContent: NbMenuItem[] = MenuItems;

  constructor(private sidebarService: NbSidebarService) {}

  displaySideBar() {
    this.sidebarService.toggle(false, 'left');
  }
}
