import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Synonym } from './synonym';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SynonymService {

  private url = "http://localhost:8080/api";

  constructor(private httpClient: HttpClient) { }

  getsynonymsList(): Observable<Synonym[]>{
    return this.httpClient.get<Synonym[]>(`${this.url}`);
  }

  createEmployee(synonym: Synonym): Observable<Object>{
    return this.httpClient.post(`${this.url}`, synonym);
  }

  getSynonym(word: string): Observable<string[]>{
    return this.httpClient.get<string[]>(`${this.url}/${word}`);
  }
  
}
