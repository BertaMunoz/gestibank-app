export class Conseiller {
    mle: Number;
    dateEmbauche: String;
    nom: string;
    prenom: string;
    email: string;
    tel: string;
    adresse: string;
    codePostale: Number;
    ville: string;

    //constructor 
    constructor(mle: Number, dateEmbauche: String, nom: string, prenom: string, email: string, tel: string, adresse: string, codePostale: Number, ville: string) {
        this.mle = mle;
        this.dateEmbauche = dateEmbauche;
        this.nom = nom
        this.prenom = prenom;
        this.email = email;
        this.tel = tel;
        this.adresse = adresse;
        this.codePostale=codePostale;
        this.ville =ville;
    }

}
