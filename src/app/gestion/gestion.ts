import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactData, ContactDataService } from '../contact-data-service';

@Component({
  imports: [],
  selector: 'app-gestion',
  styleUrl: './gestion.scss',
  templateUrl: './gestion.html',
})
export class Gestion implements OnInit, OnDestroy {
  private contactDataService = inject(ContactDataService);
  private dernierSub!: Subscription;

  dernier: ContactData | null = null;

  ngOnInit() {
    this.dernierSub = this.contactDataService.dernier$.subscribe((data) => {
      this.dernier = data;
    });
  }

  ngOnDestroy() {
    this.dernierSub.unsubscribe();
  }
}
