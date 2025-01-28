import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharacterService } from '../../services/character.service';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: any[] = [];
  filteredCharacters: any[] = [];
  searchTerm: string = '';
character: any;

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

  generatePDF(character: any): void {
    if (!character) {
      console.error("Error: No se proporcionó un personaje.");
      return;
    }
  
    const doc = new jsPDF();
  
    doc.setFontSize(18);
    doc.text('Detalles del Personaje', 10, 10);
  
    if (character.image) {
      doc.addImage(character.image, 'JPEG', 10, 20, 50, 50);
    } else {
      doc.text("Imagen no disponible", 10, 30);
    }
  
    autoTable(doc, {
      startY: 80,
      head: [['Campo', 'Valor']],
      body: [
        ['ID', character.id ?? 'Desconocido'],
        ['Nombre', character.name ?? 'Desconocido'],
        ['Especie', character.species ?? 'Desconocido'],
        ['Estado', character.status ?? 'Desconocido'],
        ['Género', character.gender ?? 'Desconocido'],
        ['Ubicación', character.location?.name ?? 'Desconocido']
      ],
    });
  
    doc.save(`Personaje_${character.name || 'Desconocido'}.pdf`);
  }
  
}
