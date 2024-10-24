import { Component } from '@angular/core';
import { PersonService } from '../services/person.service';
import { Person } from '../models/person.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-person-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css'],
})
export class PersonFormComponent {
  person: Person = { name: '', address: '' };
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private personService: PersonService) {}

  onSubmit() {
    this.personService.createPerson(this.person).subscribe({
      next: (createdPerson) => {
        this.successMessage = createdPerson.name + " is Added to Database.";
        this.person = { name: '', address: '' };
      },
      error: (err) => {
        this.errorMessage = `Error: ${err.error}`;
      },
    });
  }
}
