import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://bit.ly/3Fp14q4'),
    new Recipe('A Test Recipe', 'This is a test', 'https://bit.ly/3Fp14q4')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
