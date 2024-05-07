import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CompanyComponent } from './views/company/company.component';
import { DestinationComponent } from './views/destination/destination.component';
import { PackagesComponent } from './views/packages/packages.component';
import { PopulartoursComponent } from './views/populartours/populartours.component';
import { ContactComponent } from './views/contact/contact.component';

export const routes: Routes = [
	{path:'home',title:'home',component:HomeComponent},
	{path:'company',title:'about',component:CompanyComponent},
	{path:'destination',title:'destination',component:DestinationComponent},
	{path:'package',title:'package',component:PackagesComponent},
	{path:'populartour',title:'populartour',component:PopulartoursComponent},
	{path:'contact',title:'contact',component:ContactComponent},




];
