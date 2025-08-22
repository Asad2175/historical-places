import { Routes } from '@angular/router';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { HomeComponent } from './home/home.component';
import { DetailsPageComponent } from './details-page/details-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'suggestions',
        component: SuggestionsComponent
    },
    {
        path: 'details',
        component: DetailsPageComponent
    }
];
