import { Hospitals } from './hospitals.component';
import { Municipalities } from './municipalities.component';
import { Specialisations } from './specialties.component';
import { ViewSupportingModelTitles } from '../operational-support-models/view-supporting-model-titles.component';

export const MenuItems: any[] = [
  {
    title: ViewSupportingModelTitles.Municipalities,
    expanded: true,
    children: Municipalities,
  },
  {
    title: ViewSupportingModelTitles.Hospitals,
    expanded: false,
    children: Hospitals,
  },
  {
    title: ViewSupportingModelTitles.Specialisations,
    expanded: false,
    children: Specialisations,
  },
];
