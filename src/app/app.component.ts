import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { NbMenuService } from '@nebular/theme';
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

  constructor(private sidebarService: NbSidebarService, menu: NbMenuService) {
    menu.onItemClick().subscribe((item) => {
      console.log(item);
    });
  }

  displaySideBar() {
    this.sidebarService.toggle(false, 'left');
  }
}
