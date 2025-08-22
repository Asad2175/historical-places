import { Component, inject } from '@angular/core';
import { Suggestions } from '../mock/historical-places';
import { Router, RouterLink } from '@angular/router';
import { HistoricalPlacesService } from '../services/historical-places.service';
import { HistoricalPlaces } from '../interfaces/historical-places.interface';

@Component({
  selector: 'app-suggestions',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent {
  public historicalPlaces = Suggestions;
  private service = inject(HistoricalPlacesService);
  private router = inject(Router);

  public onVisitClick(index: number, e: Event): void {
    e.stopPropagation();
    this.historicalPlaces[index].visited = !this.historicalPlaces[index].visited;
  }
  
  public gotoDetailsPage(data: HistoricalPlaces) {
    this.service.set(data);
    this.router.navigate(['/details']);
  }

}
