import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'https://rickandmortyapi.com/api/character'; 

  constructor(private http: HttpClient) {}
  
  getCharacters(): Observable<Character[]> {
    return this.http.get<{ results: Character[] }>('https://rickandmortyapi.com/api/character')
      .pipe(
        map(response => response.results)
      );
  }
  

  getCharacterById(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}/${id}`);
  }
  
}
