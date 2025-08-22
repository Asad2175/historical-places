import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Places } from './mock/historical-places';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'historical-places';
  public router = inject(Router);
  public historicalPlaces = Places;

  public onVisitClick(index: number): void {
    this.historicalPlaces[index].visited = !this.historicalPlaces[index].visited;
  }

  public goToSuggestionsPage() {
    this.router.navigate(['suggestions']);
  }
}
