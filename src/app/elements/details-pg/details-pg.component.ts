import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { StarRateComponent } from '../../components/star-rate/star-rate.component';

@Component({
  selector: 'app-details-pg',
  standalone: true,
  imports: [RouterLink,NavBarComponent,FooterComponent,StarRateComponent],
  templateUrl: './details-pg.component.html',
  styleUrl: './details-pg.component.css'
})
export class DetailsPgComponent {

  constructor(private routeId: ActivatedRoute,private api: ApiService){}

  data: any =[];
  rate: any = 0;
  ngOnInit(){
    this.api.getData().subscribe((res:any) => {

      let id = this.routeId.snapshot.paramMap.get('id')

      let response = res

      let product = response.filter((e:any) => e.id == id)
      this.data = product[0]
      this.rate = this.data.rating.rate;

    })
  }

}
