import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
title = 'string';
sousTitre = 'string';
description = 'string';
lien = 'string';


  constructor() {
    this.title = "Exercice 1";
    this.description = "Mon premier exercice angular avec Dragée gingerbread brownie topping chocolate cake." +
      " Sesame snaps bear claw chupa chups oat cake candy canes muffin. Halvah gummies oat cake." +
      " Candy canes cake fruitcake gummi bears tiramisu wafer jelly caramels. ";

    this.lien = "lien vers le repository";

  }

  ngOnInit(): void {
  }

}
