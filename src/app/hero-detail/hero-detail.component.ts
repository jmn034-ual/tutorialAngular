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
  powerHero: Power | undefined;
  mostrarPower = false;


  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private powerService: PowerService,
    private location: Location
  ) {}

  addPower(power: Power): void {
    if (this.hero) {
      if (!this.hero.superpoderes) {
        this.hero.superpoderes = []; // Inicializa powers si es nulo o indefinido
      }
      this.hero.superpoderes.push(power);
    }
  }

  getPower(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.powerService.getPower(id).subscribe(power => this.powerHero = power);
  } 
  
  ngOnInit(): void {
    this.getHero();
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

  removePower(power: Power): void {
    if (this.hero) {
      if (this.hero.superpoderes) {
        this.hero.superpoderes = this.hero.superpoderes.filter(p => p !== power);
      }
    }
  }
}