import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ALLRESTAURANTS, Restaurant } from 'src/app/models/restaurant.model';
import { FilterService } from 'src/app/services/restaurant-services/filter.service';
import { RestaurantsMainServiceService } from 'src/app/services/restaurant-services/restaurants-main.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss']
})
export class RestaurantDetailsComponent implements OnInit {
  //get the restaurant id
  restaurantId!: string;
  restaurant!: Restaurant;
  constructor(private activatedRoute: ActivatedRoute, private filterService: FilterService ,private mainService:RestaurantsMainServiceService) { }

  images: string[] = [];
  ngOnInit(): void {
    this.restaurantId = this.activatedRoute.snapshot.params.id;
    this.filterService.getRestaurantById(this.restaurantId).subscribe(val => {
      this.restaurant = val[0];
      console.log(this.restaurant.name);
    })


}

}
