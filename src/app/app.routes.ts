import { Routes } from '@angular/router';
import { CardsComponent } from './elements/cards/cards.component';
import { ContactComponent } from './elements/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomePgComponent } from './elements/home-pg/home-pg.component';

export const routes: Routes = [

    {path: '', component: HomePgComponent},
    {path: 'product', component: CardsComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**',component: NotFoundComponent},

];
