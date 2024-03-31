import { NgIf, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Power } from '../power';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PowerService } from '../power.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-power-detail',
  standalone: true,
  imports: [NgIf, UpperCasePipe, FormsModule],
  templateUrl: './power-detail.component.html',
  styleUrl: './power-detail.component.css'
})
export class PowerDetailComponent {
  @Input() power: Power | undefined;

  constructor(
    private route: ActivatedRoute, 
    private powerService: PowerService,
    private location: Location
    ) {}

    
  
    goBack(): void {
      this.location.back();
    }

}
