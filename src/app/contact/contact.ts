import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ContactDataService } from '../contact-data-service';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact implements OnInit, OnDestroy {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly contactDataService = inject(ContactDataService);
  private hideSub!: Subscription;

  // requis + doit contenir un @
  private readonly emailValidators = [Validators.required, Validators.pattern(/@/)];

  protected readonly form = this.fb.nonNullable.group({
    prenom: ['', Validators.required],
    nom: ['', Validators.required],
    age: [null as number | null],
    hide: [false],
    email: ['', this.emailValidators],
    commentaire: ['', Validators.required],
  });

  public ngOnInit() {
    this.hideSub = this.form.controls.hide.valueChanges.subscribe((cache) => {
      const email = this.form.controls.email;
      if (cache) {
        // email caché : plus requis et valeur réinitialisée
        email.clearValidators();
        email.reset();
      } else {
        email.setValidators(this.emailValidators);
      }
      email.updateValueAndValidity();
    });
  }

  protected envoyer() {
    if (this.form.invalid) return;
    this.contactDataService.envoyer(this.form.getRawValue());
    alert('Le formulaire est valide');
    this.router.navigate(['/accueil']);
  }

  public ngOnDestroy() {
    this.hideSub.unsubscribe();
  }
}
