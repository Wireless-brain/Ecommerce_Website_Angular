import { Routes } from '@angular/router';
import { CardsComponent } from './elements/cards/cards.component';
import { ContactComponent } from './elements/contact/contact.component';
import { HomePgComponent } from './elements/home-pg/home-pg.component';
import { NotFoundComponent } from './elements/not-found/not-found.component';
import { DetailsPgComponent } from './elements/details-pg/details-pg.component';
import { LoginComponent } from './elements/login/login.component';

export const routes: Routes = [

    {path: '', component: HomePgComponent},
    {path: 'product', component: CardsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'product/:id',component: DetailsPgComponent},
    {path: 'login', component: LoginComponent},
    {path: '**',component: NotFoundComponent},


];
