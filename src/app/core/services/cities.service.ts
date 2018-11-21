import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { BehaviorSubject, Observable } from 'rxjs';

const CITIES_KEY = 'cities';
interface UserCities {
  username: string;
  cities: string[];
}

@Injectable()
export class CitiesService {

  private _cities: BehaviorSubject<string[]>;

  constructor(
    private authService: AuthService
  ) { 
    this.authService.CurrentUserName.subscribe(username => {
      this._cities.next(this.getCitiesForUser(username));
    });
  }

  get Cities(): Observable<string[]> {
    return this._cities.asObservable();
  }

  private getCitiesForUser(username: string): string[] {
    const cities: UserCities[] = JSON.parse(localStorage.getItem(CITIES_KEY)) || [];
    const userCities = cities.find(c => c.username === username);
    return userCities ? userCities.cities : [];
  }
}
