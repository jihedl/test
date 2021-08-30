export interface Produit {
    idProduit:number;
    codeProduit:number;
    designation:string;
    prixUnitaire:number;
    unite:string;
    codeSage:number;
    tva:number;
    idFamilleProduit:number;
    devise:number;
    methodeFacturation:number;
    typeProduit:boolean;
    isRistourne:boolean;
    isProrata:boolean;
    codeComptabilite:string;
    codeAnalytique:string;
    isFatureUneFois:boolean;
}
