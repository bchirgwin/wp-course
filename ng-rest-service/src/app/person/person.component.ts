import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.css',
})
export class PersonComponent {
  @Input() personId: number = 1;
  person$?: Observable<unknown>;

  constructor(private swapiService: SwapiService) {}

  ngOnInit(): void {
    this.person$ = this.swapiService.getPeople(this.personId);
  }
}
