import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { StarterComponent } from './Components/starter/starter.component';
import { PortfolioDetailsComponent } from './Components/portfolio-details/portfolio-details.component';
import { ContactComponent } from './Components/contact/contact.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '', component: StarterComponent },
    { path: '', component: PortfolioDetailsComponent },
    { path: '', component: ContactComponent },
    {
        path: 'portfolio-details/:id',
        loadComponent: () => import('../app/Components/portfolio-details/portfolio-details.component').then(m => m.PortfolioDetailsComponent)
    },
    { path: '**', component: NotFoundComponent },
];
