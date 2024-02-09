import { CommonModule, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rate',
  standalone: true,
  imports: [NgFor,CommonModule],
  templateUrl: './star-rate.component.html',
  styleUrl: './star-rate.component.css'
})
export class StarRateComponent {

  @Input() rating: any;

  get stars() {
    return Array(Math.floor(this.rating)).fill(0);
  }

}