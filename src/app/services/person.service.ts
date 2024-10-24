import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../models/person.model'; // Define your Person model

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private apiUrl = 'https://localhost:7072/api/Home/';

  constructor(private http: HttpClient) {}

  createPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.apiUrl+"CreatePerson", person);
  }

  getPerson(id: string): Observable<Person> {
    return this.http.get<Person>(`${this.apiUrl+"GetAllPersons"}`);
  }
}
