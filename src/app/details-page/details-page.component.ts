import { Component, inject, OnInit } from '@angular/core';
import { HistoricalPlacesService } from '../services/historical-places.service';
import { HistoricalPlaces } from '../interfaces/historical-places.interface';
import { CommonModule, Location } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-details-page',
  imports: [CommonModule, RouterLink],
  standalone: true,
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
  private service = inject(HistoricalPlacesService);
  private location = inject(Location);
  public placeData!: HistoricalPlaces | null;

  ngOnInit() {
    this.service.subjectObservable$.subscribe((res: HistoricalPlaces | null) => {
      if (res) {
        this.placeData = res;
      } else {
        this.goback();
      }
    });
  }

  goback() {
    this.location.back(); 
  }

}
