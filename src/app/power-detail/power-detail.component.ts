import { NgIf, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Power } from '../power';
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
}