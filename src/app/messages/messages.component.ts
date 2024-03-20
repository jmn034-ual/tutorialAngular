import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import {
  NgIf,
  NgFor,
} from '@angular/common';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    ],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}
}
