import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../services/swapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: string[] = [];
  constructor(private route: Router, private swapiSvc: SwapiService) { }

  ngOnInit() {
    this.swapiSvc.getCategories().subscribe((data: any) => {
      console.log(Object.keys(data));
      this.categories = Object.keys(data);
      // this.result.temp = (data.main.temp - 273).toFixed(2);
      // this.result.desc = data.weather[0].description;
    });
  }

  select(categoryName: string) {
    console.log(categoryName);
    this.route.navigate(['/items', categoryName]);
  }
}
