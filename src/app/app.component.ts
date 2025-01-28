import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './components/character-list/character-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CharacterListComponent],
  template: `
    <h1>Lista de Personajes - Rick and Morty</h1>
    <app-character-list></app-character-list>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
