import {Component, OnInit} from '@angular/core';
import {
  NgIf,
  NgFor,
  UpperCasePipe,
} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-powers',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe,
    ],
  templateUrl: './powers.component.html',
  styleUrl: './powers.component.css'
})

export class PowersComponent {

}
