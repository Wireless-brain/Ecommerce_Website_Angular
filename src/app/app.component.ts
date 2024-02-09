import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';
import { SlicePipe } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CardsComponent } from './elements/cards/cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './elements/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SlicePipe,NavBarComponent,CardsComponent,FooterComponent,ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eKart_Angular';

  data: any = [];

  constructor(public api:ApiService) {}

  ngOnInit() {
    this.api.getData().subscribe(response => {
      this.data = response;
      console.log(this.data);
    })
  }
}