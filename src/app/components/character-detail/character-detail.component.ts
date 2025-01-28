import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  character?: Character;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.characterService.getCharacterById(id).subscribe({
        next: (data: Character) => {  
          this.character = data;
        },
        error: (error: any) => {  
          console.error('Error al obtener el personaje', error);
        }
      });
    }
  }
}
