import {Component,  OnInit} from '@angular/core';
import {NgFor, NgIf, UpperCasePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Hero} from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PowerService } from '../power.service';
import { HeroService } from '../hero.service';
import { PowersComponent } from '../powers/powers.component';
import { Power } from '../power';
import { PowerDetailComponent } from '../power-detail/power-detail.component';

@Component({
  standalone: true,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  imports: [FormsModule, NgIf, NgFor, UpperCasePipe, PowersComponent, PowerDetailComponent],
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;
  powers: Power[] = [];
  powerHero: Power | undefined;
  mostrarPower = false;


  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private powerService: PowerService,
    private location: Location
  ) {}

  addPower(power: Power): void {
    // Verifica que el poder no esté ya en la lista antes de agregarlo
    if (!this.powers.find(p => p.id === power.id)) {
      this.powers.push(power);
    }
  }
  
  removePower(power: Power): void {
    this.powers = this.powers.filter(p => p.id !== power.id);
  }

  getPower(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.powerService.getPower(id).subscribe(power => this.powerHero = power);
  } 
  
  ngOnInit(): void {
    this.getHero();
    this.addPower(this.powerService.getRandomPower()!);
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')!);
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
}