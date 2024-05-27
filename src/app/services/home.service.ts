import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  
  private baseUrl= 'https://localhost:7102';

  constructor() { }
}
