import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../services/swapi.service';
import { ActivatedRoute } from '@angular/router';

export interface Character {
  name: string;
  birth_year: string;
  height: string;
  mass: string;
  gender: string;
  hair_color: string;
  skin_color: string;
}

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private swapiSvc: SwapiService) { }

  categoryName: string = "";
  items: string[] = [];

  ngOnInit() {
    this.categoryName = this.activatedRoute.snapshot.params.categoryName;
    this.swapiSvc.getItems(this.categoryName).subscribe((data: any) => {
      console.log(this.categoryName);
      switch (this.categoryName) {
        case 'people':
          for (var i = 0; i < data.results.length; i++) {
            this.items.push(data.results[i].name);
          }
          break;
        case 'films':
          for (var i = 0; i < data.results.length; i++) {
            this.items.push(data.results[i].title);
          }
          break;
      }
    });
  }
}
