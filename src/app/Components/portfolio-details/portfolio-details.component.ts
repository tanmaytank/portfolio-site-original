import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import Swiper from 'swiper';
import AOS from 'aos';
import { PORTFOLIO_DETAILS, PortfolioItemDetails } from '../Model/Project-details-page';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-portfolio-details',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './portfolio-details.component.html',
  styleUrl: './portfolio-details.component.scss'
})
export class PortfolioDetailsComponent {

  portfolioItem: PortfolioItemDetails | undefined;
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    const idParam = this._route.snapshot.paramMap.get('id');
    const id = idParam ? parseInt(idParam, 10) : null;

    if (id !== null) {
      this.portfolioItem = PORTFOLIO_DETAILS.find(item => item.id === id);
      console.log(this.portfolioItem, 'this.portfolioItem');

    }
  }

  ngAfterViewInit() {
    new Swiper('.swiper', {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });

    AOS.init({ duration: 1000, once: true });
  }
}
