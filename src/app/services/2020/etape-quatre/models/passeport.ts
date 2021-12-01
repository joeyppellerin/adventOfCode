import { CouleurYeuxEnum } from 'src/app/services/2020/etape-quatre/models/couleur-yeux.enum';
import { UniteMesureEnum } from './unite-mesure.enum';

export class Passeport {
  private anneeNaissance: string;
  private anneeDelivraison: string;
  private anneeExpiration: string;
  private grandeur: string;
  private couleurCheveux: string;
  private couleurYeux: string;
  private idPasseport: string;
  private idPays: string;

  constructor(
    anneeNaissance?: string,
    anneeDelivraison?: string,
    anneeExpiration?: string,
    grandeur?: string,
    couleurCheveux?: string,
    couleurYeux?: string,
    idPasseport?: string,
    idPays?: string
  ) {
    this.anneeNaissance = anneeNaissance? anneeNaissance: '';
    this.anneeDelivraison = anneeDelivraison? anneeDelivraison: '';
    this.anneeExpiration = anneeExpiration? anneeExpiration: '';
    this.grandeur = grandeur? grandeur: '';
    this.couleurCheveux = couleurCheveux? couleurCheveux: '';
    this.couleurYeux = couleurYeux? couleurYeux: '';
    this.idPasseport = idPasseport? idPasseport: '';
    this.idPays = idPays? idPays: '';
  }

  public estPasseportValid(): boolean {
    return this.estAnneeNaissanceValide()
      && this.estAnneeDelivraisonValide()
      && this.estAnneeExpirationValide()
      && this.estGrandeurValide()
      && this.estCouleurCheveuxValide()
      && this.estCouleurYeuxValide()
      && this.estIdPasseportValide()
    ;
  }

  private estAnneeNaissanceValide(): boolean {
    const annee = Number(this.anneeNaissance);

    return annee >= 1920 && annee <= 2002;
  }

  private estAnneeDelivraisonValide(): boolean {
    const annee = Number(this.anneeDelivraison);

    return annee >= 2010 && annee <= 2020;
  }

  private estAnneeExpirationValide(): boolean {
    const annee = Number(this.anneeExpiration);

    return annee >= 2020 && annee <= 2030;
  }

  private estGrandeurValide(): boolean {
    const lenght = this.grandeur.length;
    const uniteMesure = this.grandeur.substring(lenght - 2, lenght);
    const mesure = Number(this.grandeur.substring(0, lenght - 2));
    const mesureInchValide = uniteMesure === UniteMesureEnum.IN && mesure >= 59 && mesure <= 76;
    const mesureCentimeterValide = uniteMesure === UniteMesureEnum.CM && mesure >= 150 && mesure <= 193;

    if (mesureInchValide || mesureCentimeterValide) {
      return true;
    }

    return false;
  }

  private estCouleurCheveuxValide(): boolean {
    const regex = new RegExp(/^#(\d|[a-f]){6}$/);

    return regex.test(this.couleurCheveux);
  }

  private estCouleurYeuxValide(): boolean {
    return this.couleurYeux && this.couleurYeux.toUpperCase() in CouleurYeuxEnum;
  }

  private estIdPasseportValide(): boolean {
    const regex = new RegExp(/^[0]\d{8}$/);

    return regex.test(this.idPasseport);
  }
}
