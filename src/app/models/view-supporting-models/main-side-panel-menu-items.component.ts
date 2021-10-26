import { Hospitals } from './hospitals.component';
import { Municipalities } from './municipalities.component';
import { Specialisations } from './specialties.component';

export const MenuItems: any[] = [
  {
    title: 'Municipalities',
    expanded: true,
    children: Municipalities,
  },
  {
    title: 'Hospitals',
    expanded: false,
    children: Hospitals,
  },
  {
    title: 'Specialisations',
    expanded: false,
    children: Specialisations,
  },
];
