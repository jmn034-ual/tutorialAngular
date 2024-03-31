import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { NgIf, NgFor, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PowerDetailComponent } from '../power-detail/power-detail.component';
import { Power } from '../power';
import { PowerService } from '../power.service';

@Component({
  selector: 'app-powers',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, UpperCasePipe, PowerDetailComponent],
  templateUrl: './powers.component.html',
  styleUrl: './powers.component.css',
})
export class PowersComponent implements OnInit {
  powers: Power[] = [];
  @Output() powerClicked: EventEmitter<Power> = new EventEmitter<Power>();

  constructor(private powerService: PowerService) {}

  onClick(power: Power): void {
    this.powerClicked.emit(power);
  }
  getPorwers(): void {
    this.powerService.getPowers().subscribe(powers => this.powers = powers);
  }

  ngOnInit(): void {
    this.getPorwers();
  }
}
