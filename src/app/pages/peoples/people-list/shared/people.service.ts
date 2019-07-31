import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { People } from "./people.model";
import { Observable } from 'rxjs';

@Injectable()
export class PeopleService {

  constructor(private httpc: HttpClient) { }

  public getAllPeoples(): Observable<People[]>{
    return this.httpc.get<People[]>(`https://swapi.co/api/people/`);
  }

  public getPeoplesPagination(page: any): Observable<People[]>{
    return this.httpc.get<People[]>(`https://swapi.co/api/people/?page=${page}`);
  }
}
