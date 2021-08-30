import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Produit } from './produit.model';
import { ProduitService } from './produit.service';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styles: []
})
export class ProduitComponent implements OnInit {

  public produit: Produit[];


  constructor(private produitService:ProduitService) { }

  ngOnInit() {
    this.getProduits();
  }

  public getProduits(): void{
    this.produitService.getProduits().subscribe(
      (Response: Produit[]) => {
        this.produit = Response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );  
  }
public onOpenModal(produit: Produit, mode: string): void {
    const container = document.getElementById('main-container');
  }
}  
