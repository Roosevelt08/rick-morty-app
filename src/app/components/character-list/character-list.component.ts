import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule, FormsModule], // No necesitamos app.module.ts
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: any[] = [];
  filteredCharacters: any[] = [];
  searchTerm: string = '';

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((data) => {
      this.characters = data; 
      this.filteredCharacters = this.characters;
    });
  }
  

  filterCharacters(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredCharacters = this.characters.filter(
      (character) =>
        character.name.toLowerCase().includes(term) ||
        character.id.toString().includes(term)
    );
  }
}
