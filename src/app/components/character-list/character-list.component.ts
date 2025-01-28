import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], 
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];
  filteredCharacters: Character[] = [];
  searchQuery: string = '';
  loading: boolean = true;
  errorMessage: string = '';

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe({
      next: (data) => {
        console.log(data);
        this.characters = Array.isArray(data) ? data : [];
        this.filteredCharacters = data;
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = 'Error al cargar los personajes';
        this.loading = false;
        console.error(error);
      }
    });
  }

  filterCharacters(query: string) {
    if (!query.trim()) {
      this.filteredCharacters = this.characters; // Si no hay búsqueda, mostrar todos
      return;
    }
    this.filteredCharacters = this.characters.filter(character =>
      character.name.toLowerCase().includes(query.toLowerCase())
    );
  }
  
}
