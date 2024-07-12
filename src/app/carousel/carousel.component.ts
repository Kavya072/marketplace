import { NgFor } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  imports: [MatCardModule, SlickCarouselModule, NgFor],
})
export class CarouselComponent {
  slides = [
    { img: 'https://via.placeholder.com/600x400?text=Slide+1' },
    { img: 'https://via.placeholder.com/600x400?text=Slide+2' },
    { img: 'https://via.placeholder.com/600x400?text=Slide+3' },
    { img: 'https://via.placeholder.com/600x400?text=Slide+4' },
    { img: 'https://via.placeholder.com/600x400?text=Slide+5' },
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
}
