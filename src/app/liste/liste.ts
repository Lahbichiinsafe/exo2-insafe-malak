import { Component } from '@angular/core';

export interface Film {
  titre: string;
  annee: number;
  affiche: string;
}

@Component({
  imports: [],
  selector: 'app-liste',
  styleUrl: './liste.scss',
  templateUrl: './liste.html',
})
export class Liste {
  films: Film[] = [
    { titre: 'Coraline', annee: 2009, affiche: 'films/coraline.jpg' },
    { titre: 'Interstellar', annee: 2014, affiche: 'films/interstellar.jpg' },
    { titre: 'Titanic', annee: 1997, affiche: 'films/titanic.png' },
    { titre: 'Scream', annee: 1996, affiche: 'films/scream.jpg' },
    { titre: 'Orphan', annee: 2009, affiche: 'films/orphan.jpg' },
  ];

  filmSelectionne: Film | null = null;

  selectionner(film: Film) {
    this.filmSelectionne = film;
  }
}
