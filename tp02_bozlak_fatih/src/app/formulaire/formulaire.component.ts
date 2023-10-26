import {Component} from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {
  utilisateur = {
    nom: '',
    prenom: '',
    adresse: '',
    cp: '',
    ville: '',
    tel: '',
    email: '',
    civilite: '',
    mdp: '',
    identifiant: '',
    pays: '',
  }

  afficherLesInfos() {
    console.log(this.utilisateur);
  }
}
