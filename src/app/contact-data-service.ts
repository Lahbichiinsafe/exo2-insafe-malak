import { Service } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ContactData {
  prenom: string;
  nom: string;
  age: number | null;
  hide: boolean;
  email: string;
  commentaire: string;
}

@Service()
export class ContactDataService {
  // null = aucun formulaire envoyé
  private dernier = new BehaviorSubject<ContactData | null>(null);

  // lecture seule pour les composants
  dernier$ = this.dernier.asObservable();

  // un nouvel envoi écrase le précédent
  envoyer(data: ContactData) {
    this.dernier.next(data);
  }
}
