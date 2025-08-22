import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Places } from '../mock/historical-places';
import { HistoricalPlacesService } from '../services/historical-places.service';
import { HistoricalPlaces } from '../interfaces/historical-places.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'historical-places';
  public router = inject(Router);
  public service = inject(HistoricalPlacesService);
  public historicalPlaces = Places;

  public onVisitClick(index: number, e: Event): void {
    e.stopPropagation();
    this.historicalPlaces[index].visited = !this.historicalPlaces[index].visited;
  }

  public gotoDetailsPage(data: HistoricalPlaces) {
    this.service.set(data);
    this.router.navigate(['/details']);
  }

  public goToSuggestionsPage() {
    this.router.navigate(['suggestions']);
  }
}
