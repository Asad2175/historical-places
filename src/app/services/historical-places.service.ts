import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HistoricalPlaces } from '../interfaces/historical-places.interface';

@Injectable({
  providedIn: 'root'
})
export class HistoricalPlacesService {
  private subject = new BehaviorSubject<HistoricalPlaces | null>(null);

  subjectObservable$ = this.subject.asObservable();

  set(place: HistoricalPlaces) {
    this.subject.next(place);
  }

}
