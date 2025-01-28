import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CharacterListComponent } from './components/character-list/character-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CharacterListComponent, FormsModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rick-morty-app';
}
