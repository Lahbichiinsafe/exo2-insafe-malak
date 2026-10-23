import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactData } from '../interfaces/contact-data';
import { ContactDataService } from '../services/contact-data-service';
import { NotFound } from '../not-found/not-found';

@Component({
  imports: [NotFound],
  selector: 'app-gestion',
  styleUrl: './gestion.scss',
  templateUrl: './gestion.html',
})
export class Gestion implements OnInit, OnDestroy {
  private readonly contactDataService = inject(ContactDataService);
  private dernierSub!: Subscription;

  protected dernier: ContactData | null = null;

  public ngOnInit() {
    this.dernierSub = this.contactDataService.dernier$.subscribe((data) => {
      this.dernier = data;
    });
  }

  public ngOnDestroy() {
    this.dernierSub.unsubscribe();
  }
}
