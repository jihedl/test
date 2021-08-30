import { Injectable } from '@angular/core';
import { Produit } from './produit.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({providedIn: 'root'})

export class ProduitService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {} 

  public getProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.apiServerUrl}/produit`);
  }
}
