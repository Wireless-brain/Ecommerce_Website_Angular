import { SlicePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  data: any = [];

  constructor(public api:ApiService) {}

  ngOnInit() {
    this.api.getData().subscribe(response => {
      this.data = response;
      console.log(this.data);
    })
  }

}
