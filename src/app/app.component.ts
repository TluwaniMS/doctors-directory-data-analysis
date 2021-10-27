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
  itemTitle: any | string;
  selectedItem: any | string;

  constructor(private sidebarService: NbSidebarService, menu: NbMenuService) {
    menu.onItemClick().subscribe((itemClicked) => {
      this.itemTitle = itemClicked.item.parent?.title;
      this.selectedItem = itemClicked.item;

      this.checkItemTitleAndCallLinkedFunction(
        this.itemTitle,
        this.selectedItem
      );
    });
  }

  displaySideBar() {
    this.sidebarService.toggle(false, 'left');
  }

  checkItemTitleAndCallLinkedFunction(itemTitle: string, selectedItem: any) {
    switch (itemTitle) {
      case 'Municipalities':
        this.getMunicipalityStatsByKey(selectedItem.municipalityKey);
        break;
      case 'Hospitals':
        this.getHospitalStatsByKey(selectedItem.hospitalKey);
        break;
      case 'Specialisations':
        this.getSpecialtyStatsByKey(selectedItem.specialisationKey);
        break;
    }
  }

  getHospitalStatsByKey(hospitalKey: string) {
    console.log(hospitalKey);
  }

  getMunicipalityStatsByKey(municipalityKey: string) {
    console.log(municipalityKey);
  }

  getSpecialtyStatsByKey(specialtyKey: string) {
    console.log(specialtyKey);
  }
}
