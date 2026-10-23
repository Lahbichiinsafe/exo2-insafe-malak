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
  private readonly dernier = new BehaviorSubject<ContactData | null>(null);

  // lecture seule pour les composants
  public readonly dernier$ = this.dernier.asObservable();

  // un nouvel envoi écrase le précédent
  public envoyer(data: ContactData) {
    this.dernier.next(data);
  }
}
