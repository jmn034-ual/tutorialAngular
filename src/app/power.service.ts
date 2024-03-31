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

  getPower(id: number): Observable<Power> {
    const power = POWERS.find(h => h.id === id)!;
    this.messageService.add(`PowerService: fetched power id=${id}`);
    return of(power);
  }
  getRandomPower(): Power | undefined {
    if (POWERS.length === 0) {
      return undefined;
    }
    const randomIndex = Math.floor(Math.random() * POWERS.length);
    return POWERS[randomIndex];
  }
}
