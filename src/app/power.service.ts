import { Injectable } from '@angular/core';
import { Power } from './power';
import { POWERS } from './mock-powers';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class PowerService {

  constructor(private messageService: MessageService) { }

  getPowers(): Observable<Power[]> {
    const powers = of(POWERS);
    this.messageService.add('PowerService: fetched powers');
    return powers;
  }
}
