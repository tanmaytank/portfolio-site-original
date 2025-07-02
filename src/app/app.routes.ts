import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { StarterComponent } from './Components/starter/starter.component';
import { PortfolioDetailsComponent } from './Components/portfolio-details/portfolio-details.component';
import { ContactComponent } from './Components/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '', component: StarterComponent },
    { path: '', component: PortfolioDetailsComponent },
    { path: '', component: ContactComponent },
    { path: '**', redirectTo: '' }
];
