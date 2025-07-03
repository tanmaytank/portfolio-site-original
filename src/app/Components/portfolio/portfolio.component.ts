import { Component } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';
import { PortfolioItem, portfolioItems } from '../Model/Project-details';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

 portfolioItems: PortfolioItem[] = portfolioItems;

  constructor(private _route: Router) { }
  routetoPortfolioDetails() {
    this._route.navigateByUrl('/portfolio-details');
  }
}
