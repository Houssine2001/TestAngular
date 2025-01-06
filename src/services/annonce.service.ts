import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Annonce } from 'src/app/modele/Annonce';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  private apiUrl = 'http://localhost:3000/annonces';

  constructor(private http: HttpClient) {}

  // Récupérer toutes les annonces
  getAnnonces(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(this.apiUrl);
  }

  // Ajouter une annonce
  addAnnonce(annonce: Annonce): Observable<Annonce> {
    return this.http.post<Annonce>(this.apiUrl, annonce);
  }

  // Mettre à jour une annonce
  updateAnnonce(annonce: Annonce): Observable<Annonce> {
    return this.http.put<Annonce>(`${this.apiUrl}/${annonce.id}`, annonce);
  }

  // Supprimer une annonce
  deleteAnnonce(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
