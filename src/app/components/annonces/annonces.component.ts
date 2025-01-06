import { Component, OnInit } from '@angular/core';
import { Annonce } from 'src/app/modele/Annonce';
import { AnnonceService } from 'src/services/annonce.service';


@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {
  annonces: Annonce[] = [];
  newAnnonce: Annonce = new Annonce();

  constructor(private annonceService: AnnonceService) {}

  ngOnInit(): void {
    this.getAllAnnonces();
  }

  // Récupérer toutes les annonces
  getAllAnnonces() {
    this.annonceService.getAnnonces().subscribe(data => {
      this.annonces = data;
    });
  }

  // Ajouter une annonce
  save() {
    if (this.newAnnonce.id) {
      alert('Impossible d’ajouter une annonce existante. Utilisez "Mettre à jour".');
      return;
    }

    this.annonceService.addAnnonce(this.newAnnonce).subscribe(() => {
      this.getAllAnnonces();
      this.newAnnonce = new Annonce(); // Réinitialiser le formulaire
    });
  }

  // Supprimer une annonce
  deleteAnnonce(id: number) {
    this.annonceService.deleteAnnonce(id).subscribe(() => {
      this.getAllAnnonces();
    });
  }

  // Pré-remplir le formulaire pour la modification
  editAnnonce(annonce: Annonce) {
    this.newAnnonce = { ...annonce };
  }

  // Mettre à jour une annonce existante
  updateAnnonce() {
    if (!this.newAnnonce.id) {
      alert('Veuillez sélectionner une annonce à modifier.');
      return;
    }

    this.annonceService.updateAnnonce(this.newAnnonce).subscribe(() => {
      this.getAllAnnonces();
      this.newAnnonce = new Annonce(); // Réinitialiser le formulaire
    });
  }
}
