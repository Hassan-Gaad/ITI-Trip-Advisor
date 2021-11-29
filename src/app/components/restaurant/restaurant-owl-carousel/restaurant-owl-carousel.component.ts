import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Restaurant } from 'src/app/models/restaurant.model';
import { FilterService } from 'src/app/services/restaurant-services/filter.service';

@Component({
  selector: 'app-restaurant-owl-carousel',
  templateUrl: './restaurant-owl-carousel.component.html',
  styleUrls: ['./restaurant-owl-carousel.component.scss']
})
export class RestaurantOwlCarouselComponent implements OnInit {
  @Input() filterByFeatur!:string;
  restaurantsList!:Restaurant[];
  constructor(private filterService:FilterService) { }

  ngOnInit(): void {
    this.filterService.queryForFeatures(this.filterByFeatur).subscribe((val)=>{
      this.restaurantsList=val;
    })
  }


 customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: false,
  navSpeed: 600,
  nav: true,
  navText: ['&#8249', '&#8250;'],
   responsive: {
    0: {
      items: 1,
      
  },
  600: {
      items: 2,
      
  },
  800: {
      items: 3,
      
  },
  1000: {
      items: 4,
  }
   },
  
 }

}

