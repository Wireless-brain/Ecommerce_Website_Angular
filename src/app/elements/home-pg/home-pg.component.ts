import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HomeHead2Component } from '../../components/home-head2/home-head2.component';

@Component({
  selector: 'app-home-pg',
  standalone: true,
  imports: [NavBarComponent,FooterComponent,HomeHead2Component],
  templateUrl: './home-pg.component.html',
  styleUrl: './home-pg.component.css'
})
export class HomePgComponent {

}
