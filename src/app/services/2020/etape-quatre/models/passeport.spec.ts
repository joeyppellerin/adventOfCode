import { Passeport } from "src/app/services/2020/etape-quatre/models/passeport";

describe('Passeport', () => {
  describe('estPasseportValid', () => {
    let passeport;

    let spyEstAnneeNaissanceValide: jasmine.Spy;
    let spyEstAnneeDelivraisonValide: jasmine.Spy;
    let spyEstAnneeExpirationValide: jasmine.Spy;
    let spyEstGrandeurValide: jasmine.Spy;
    let spyEstCouleurCheveuxValide: jasmine.Spy;
    let spyEstCouleurYeuxValide: jasmine.Spy;
    let spyEstIdPasseportValide: jasmine.Spy;

    beforeEach(() => {
      passeport = passeportBuilder();

      spyEstAnneeNaissanceValide = spyOn((passeport as any), 'estAnneeNaissanceValide').and.returnValue(true);
      spyEstAnneeDelivraisonValide = spyOn((passeport as any), 'estAnneeDelivraisonValide').and.returnValue(true);
      spyEstAnneeExpirationValide = spyOn((passeport as any), 'estAnneeExpirationValide').and.returnValue(true);
      spyEstGrandeurValide = spyOn((passeport as any), 'estGrandeurValide').and.returnValue(true);
      spyEstCouleurCheveuxValide = spyOn((passeport as any), 'estCouleurCheveuxValide').and.returnValue(true);
      spyEstCouleurYeuxValide = spyOn((passeport as any), 'estCouleurYeuxValide').and.returnValue(true);
      spyEstIdPasseportValide = spyOn((passeport as any), 'estIdPasseportValide').and.returnValue(true);
    });

    it(`lorsque toutes les méthodes de validation retourne true, devrait retourner true`, () => {
      expect(passeport.estPasseportValid()).toBeTruthy();
    });

    it(`lorsque estAnneeNaissanceValide retourne false, devrait retourner true`, () => {
      spyEstAnneeNaissanceValide.and.returnValue(false);

      expect(passeport.estPasseportValid()).toBeFalsy();
    });

    it(`lorsque estAnneeDelivraisonValide retourne false, devrait retourner true`, () => {
      spyEstAnneeDelivraisonValide.and.returnValue(false);

      expect(passeport.estPasseportValid()).toBeFalsy();
    });

    it(`lorsque estAnneeExpirationValide retourne false, devrait retourner true`, () => {
      spyEstAnneeExpirationValide.and.returnValue(false);

      expect(passeport.estPasseportValid()).toBeFalsy();
    });

    it(`lorsque estGrandeurValide retourne false, devrait retourner true`, () => {
      spyEstGrandeurValide.and.returnValue(false);

      expect(passeport.estPasseportValid()).toBeFalsy();
    });

    it(`lorsque estCouleurCheveuxValide retourne false, devrait retourner true`, () => {
      spyEstCouleurCheveuxValide.and.returnValue(false);

      expect(passeport.estPasseportValid()).toBeFalsy();
    });

    it(`lorsque estCouleurYeuxValide retourne false, devrait retourner true`, () => {
      spyEstCouleurYeuxValide.and.returnValue(false);

      expect(passeport.estPasseportValid()).toBeFalsy();
    });

    it(`lorsque estIdPasseportValide retourne false, devrait retourner true`, () => {
      spyEstIdPasseportValide.and.returnValue(false);

      expect(passeport.estPasseportValid()).toBeFalsy();
    });
  });

  describe('estAnneeNaissanceValide', () => {
    it(`lorsque l'année passer en paramètre est un mot, devrait retourner false`, () => {
      const passeport = passeportBuilder('thomas');

      expect((passeport as any).estAnneeNaissanceValide()).toBeFalsy();
    });

    it(`lorsque l'année contient 3 chiffres, devrait retourner false`, () => {
      const passeport = passeportBuilder('123');

      expect((passeport as any).estAnneeNaissanceValide()).toBeFalsy();
    });

    it(`lorsque l'année contient 5 chiffres, devrait retourner false`, () => {
      const passeport = passeportBuilder('12323');

      expect((passeport as any).estAnneeNaissanceValide()).toBeFalsy();
    });

    it(`lorsque l'année est 1919, devrait retourner false`, () => {
      const passeport = passeportBuilder('1919');

      expect((passeport as any).estAnneeNaissanceValide()).toBeFalsy();
    });

    it(`lorsque l'année est 2003, devrait retourner false`, () => {
      const passeport = passeportBuilder('2003');

      expect((passeport as any).estAnneeNaissanceValide()).toBeFalsy();
    });

    it(`lorsque l'année est 1920, devrait retourner true`, () => {
      const passeport = passeportBuilder('1920');

      expect((passeport as any).estAnneeNaissanceValide()).toBeTruthy();
    });

    it(`lorsque l'année est 2002, devrait retourner true`, () => {
      const passeport = passeportBuilder('2002');

      expect((passeport as any).estAnneeNaissanceValide()).toBeTruthy();
    });

    it(`lorsque l'année est 1950, devrait retourner true`, () => {
      const passeport = passeportBuilder('1950');

      expect((passeport as any).estAnneeNaissanceValide()).toBeTruthy();
    });
  });

  describe('estAnneeDelivraisonValide', () => {
    it(`lorsque l'année de délivraison est 213, devrait retourner faux `, () => {
        const passeport = passeportBuilder('', '213');

        expect((passeport as any).estAnneeDelivraisonValide()).toBeFalsy();
    });

    it(`lorsque l'année de délivraison est 55555, devrait retourner faux`, () => {
        const passeport = passeportBuilder('', '55555');

        expect((passeport as any).estAnneeDelivraisonValide()).toBeFalsy();
    });

    it(`lorsque l'année de délivraison n'est pas un nombre, devrait retourner faux`, () => {
      const passeport = passeportBuilder('', 'abcd')

      expect((passeport as any).estAnneeDelivraisonValide()).toBeFalsy();
    });

    it(`lorsque l'année de délivraison est 2009, devrait retourner faux`, () => {
      const passeport = passeportBuilder('', '2009')

      expect((passeport as any).estAnneeDelivraisonValide()).toBeFalsy();
    });

    it(`lorsque l'année de délivraison est 2021, devrait retourner faux`, () => {
      const passeport = passeportBuilder('', '2021')

      expect((passeport as any).estAnneeDelivraisonValide()).toBeFalsy();
    });

    it(`lorsque l'année de délivraison est 2010, devrait retourner vrai`, () => {
      const passeport = passeportBuilder('', '2010')

      expect((passeport as any).estAnneeDelivraisonValide()).toBeTruthy();
    });

    it(`lorsque l'année de délivraison est 2020, devrait retourner vrai`, () => {
      const passeport = passeportBuilder('', '2020')

      expect((passeport as any).estAnneeDelivraisonValide()).toBeTruthy();
    });

    it(`lorsque l'année de délivraison est 2014, devrait retourner vrai`, () => {
      const passeport = passeportBuilder('', '2014')

      expect((passeport as any).estAnneeDelivraisonValide()).toBeTruthy();
    });
  });

  describe('estAnneeExpirationValide', () => {
    it(`lorsque l'année de délivraison est 634, devrait retourner faux `, () => {
        const passeport = passeportBuilder('', '', '634');

        expect((passeport as any).estAnneeExpirationValide()).toBeFalsy();
    });

    it(`lorsque l'année de délivraison est 55555, devrait retourner faux`, () => {
        const passeport = passeportBuilder('', '', '55555');

        expect((passeport as any).estAnneeExpirationValide()).toBeFalsy();
    });

    it(`lorsque l'année de délivraison n'est pas un nombre, devrait retourner faux`, () => {
      const passeport = passeportBuilder('', '', 'abcd')

      expect((passeport as any).estAnneeExpirationValide()).toBeFalsy();
    });

    it(`lorsque l'année de délivraison est 2019, devrait retourner faux`, () => {
      const passeport = passeportBuilder('', '', '2019')

      expect((passeport as any).estAnneeExpirationValide()).toBeFalsy();
    });

    it(`lorsque l'année de délivraison est 2031, devrait retourner faux`, () => {
      const passeport = passeportBuilder('', '', '2031')

      expect((passeport as any).estAnneeExpirationValide()).toBeFalsy();
    });

    it(`lorsque l'année de délivraison est 2020, devrait retourner vrai`, () => {
      const passeport = passeportBuilder('', '', '2020')

      expect((passeport as any).estAnneeExpirationValide()).toBeTruthy();
    });

    it(`lorsque l'année de délivraison est 2030, devrait retourner vrai`, () => {
      const passeport = passeportBuilder('', '', '2030')

      expect((passeport as any).estAnneeExpirationValide()).toBeTruthy();
    });

    it(`lorsque l'année de délivraison est 2027, devrait retourner vrai`, () => {
      const passeport = passeportBuilder('', '', '2027')

      expect((passeport as any).estAnneeExpirationValide()).toBeTruthy();
    });
  });

  describe('estGrandeurValide', () => {
    it(`lorsque grandeur est 160, devrait retourner false`, () => {
      const passeport = passeportBuilder('', '', '', '160');

      expect((passeport as any).estGrandeurValide()).toBeFalsy();
    });

    it(`lorsque grandeur est ex, devrait retourner false`, () => {
      const passeport = passeportBuilder('', '', '', 'ex');

      expect((passeport as any).estGrandeurValide()).toBeFalsy();
    });

    it(`lorsque grandeur est 160lp, devrait retourner false`, () => {
      const passeport = passeportBuilder('', '', '', '160lp');

      expect((passeport as any).estGrandeurValide()).toBeFalsy();
    });

    it(`lorsque grandeur est in, devrait retourner false`, () => {
      const passeport = passeportBuilder('', '', '', 'in');

      expect((passeport as any).estGrandeurValide()).toBeFalsy();
    });

    it(`lorsque grandeur est cm, devrait retourner false`, () => {
      const passeport = passeportBuilder('', '', '', 'cm');

      expect((passeport as any).estGrandeurValide()).toBeFalsy();
    });

    it(`lorsque grandeur est 58in, devrait retourner false`, () => {
      const passeport = passeportBuilder('', '', '', '58in');

      expect((passeport as any).estGrandeurValide()).toBeFalsy();
    });

    it(`lorsque grandeur est 77in, devrait retourner false`, () => {
      const passeport = passeportBuilder('', '', '', '77in');

      expect((passeport as any).estGrandeurValide()).toBeFalsy();
    });

    it(`lorsque grandeur est 149cm, devrait retourner false`, () => {
      const passeport = passeportBuilder('', '', '', '149cm');

      expect((passeport as any).estGrandeurValide()).toBeFalsy();
    });

    it(`lorsque grandeur est 194cm, devrait retourner false`, () => {
      const passeport = passeportBuilder('', '', '', '194cm');

      expect((passeport as any).estGrandeurValide()).toBeFalsy();
    });

    it(`lorsque grandeur est 59in, devrait retourner true`, () => {
      const passeport = passeportBuilder('', '', '', '59in');

      expect((passeport as any).estGrandeurValide()).toBeTruthy();
    });

    it(`lorsque grandeur est 76in, devrait retourner true`, () => {
      const passeport = passeportBuilder('', '', '', '76in');

      expect((passeport as any).estGrandeurValide()).toBeTruthy();
    });

    it(`lorsque grandeur est 60in, devrait retourner true`, () => {
      const passeport = passeportBuilder('', '', '', '60in');

      expect((passeport as any).estGrandeurValide()).toBeTruthy();
    });

    it(`lorsque grandeur est 150cm, devrait retourner true`, () => {
      const passeport = passeportBuilder('', '', '', '150cm');

      expect((passeport as any).estGrandeurValide()).toBeTruthy();
    });

    it(`lorsque grandeur est 193cm, devrait retourner true`, () => {
      const passeport = passeportBuilder('', '', '', '193cm');

      expect((passeport as any).estGrandeurValide()).toBeTruthy();
    });

    it(`lorsque grandeur est 171cm, devrait retourner true`, () => {
      const passeport = passeportBuilder('', '', '', '171cm');

      expect((passeport as any).estGrandeurValide()).toBeTruthy();
    });
  });

  describe('estCouleurCheveuxValide', () => {
    it(`lorsque couleurCheveux est null, devrait retourner false`, () => {
      const passeport = passeportBuilder('', '', '', '', null);

      expect((passeport as any).estCouleurCheveuxValide()).toBeFalsy();
    });

    it(`lorsque couleurCheveux est #"%?%$/?, devrait retourner false`, () => {
      const passeport = passeportBuilder('', '', '', '', '#"%?%$/?');

      expect((passeport as any).estCouleurCheveuxValide()).toBeFalsy();
    });

    it(`lorsque couleurCheveux est #ghijklmnopqrstuvwxyz, devrait retourner false`, () => {
      const passeport = passeportBuilder('', '', '', '', '#ghijklmnopqrstuvwxyz');

      expect((passeport as any).estCouleurCheveuxValide()).toBeFalsy();
    });

    it(`lorsque couleurCheveux commence par un caratère invalide ! est !123456, devrait retourner false`, () => {
      const passeport = passeportBuilder('', '', '', '', '!123456');

      expect((passeport as any).estCouleurCheveuxValide()).toBeFalsy();
    });

    it(`lorsque couleurCheveux est #1234567 soit 7 caractères suivant le #, devrait retourner false`, () => {
      const passeport = passeportBuilder('', '', '', '', '#1234567');

      expect((passeport as any).estCouleurCheveuxValide()).toBeFalsy();
    });

    it(`lorsque couleurCheveux est #123ab soit 5 caractères suivant le #, devrait retourner false`, () => {
      const passeport = passeportBuilder('', '', '', '', '#123ab');

      expect((passeport as any).estCouleurCheveuxValide()).toBeFalsy();
    });

    it(`lorsque couleurCheveux est #0C7BA7, devrait retourner false`, () => {
      const passeport = passeportBuilder('', '', '', '', '#0C7BA7');

      expect((passeport as any).estCouleurCheveuxValide()).toBeFalsy();
    });

    it(`lorsque couleurCheveux est #012345, devrait retourner true`, () => {
      const passeport = passeportBuilder('', '', '', '', '#012345');

      expect((passeport as any).estCouleurCheveuxValide()).toBeTruthy();
    });

    it(`lorsque couleurCheveux est #456789, devrait retourner true`, () => {
      const passeport = passeportBuilder('', '', '', '', '#456789');

      expect((passeport as any).estCouleurCheveuxValide()).toBeTruthy();
    });

    it(`lorsque couleurCheveux est #abcdef, devrait retourner true`, () => {
      const passeport = passeportBuilder('', '', '', '', '#abcdef');

      expect((passeport as any).estCouleurCheveuxValide()).toBeTruthy();
    });

    it(`lorsque couleurCheveux est #abc123, devrait retourner true`, () => {
      const passeport = passeportBuilder('', '', '', '', '#abc123');

      expect((passeport as any).estCouleurCheveuxValide()).toBeTruthy();
    });

    it(`lorsque couleurCheveux est #09da12, devrait retourner true`, () => {
      const passeport = passeportBuilder('', '', '', '', '#09da12');

      expect((passeport as any).estCouleurCheveuxValide()).toBeTruthy();
    });

    it(`lorsque couleurCheveux est #0c7ba7, devrait retourner true`, () => {
      const passeport = passeportBuilder('', '', '', '', '#0c7ba7');

      expect((passeport as any).estCouleurCheveuxValide()).toBeTruthy();
    });
  });

  describe('estCouleurYeuxValide', () => {
    it(`lorsque couleurYeux est null, devrait retourner false`, () => {
      const passeport = passeportBuilder('', '', '', '', '', null);

      expect((passeport as any).estCouleurYeuxValide()).toBeFalsy();
    });

    it(`lorsque couleurYeux est '', devrait retourner false`, () => {
      const passeport = passeportBuilder('', '', '', '', '', '');

      expect((passeport as any).estCouleurYeuxValide()).toBeFalsy();
    });

    it(`lorsque couleurYeux est aaa, devrait retourner false`, () => {
      const passeport = passeportBuilder('', '', '', '', '', 'aaa');

      expect((passeport as any).estCouleurYeuxValide()).toBeFalsy();
    });

    it(`lorsque couleurYeux est AMB, devrait retourner true`, () => {
      const passeport = passeportBuilder('', '', '', '', '', 'AMB');

      expect((passeport as any).estCouleurYeuxValide()).toBeTruthy();
    });

    it(`lorsque couleurYeux est amb, devrait retourner true`, () => {
      const passeport = passeportBuilder('', '', '', '', '', 'amb');

      expect((passeport as any).estCouleurYeuxValide()).toBeTruthy();
    });

    it(`lorsque couleurYeux est blu, devrait retourner true`, () => {
      const passeport = passeportBuilder('', '', '', '', '', 'blu');

      expect((passeport as any).estCouleurYeuxValide()).toBeTruthy();
    });

    it(`lorsque couleurYeux est brn, devrait retourner true`, () => {
      const passeport = passeportBuilder('', '', '', '', '', 'brn');

      expect((passeport as any).estCouleurYeuxValide()).toBeTruthy();
    });

    it(`lorsque couleurYeux est gry, devrait retourner true`, () => {
      const passeport = passeportBuilder('', '', '', '', '', 'gry');

      expect((passeport as any).estCouleurYeuxValide()).toBeTruthy();
    });

    it(`lorsque couleurYeux est grn, devrait retourner true`, () => {
      const passeport = passeportBuilder('', '', '', '', '', 'grn');

      expect((passeport as any).estCouleurYeuxValide()).toBeTruthy();
    });

    it(`lorsque couleurYeux est hzl, devrait retourner true`, () => {
      const passeport = passeportBuilder('', '', '', '', '', 'hzl');

      expect((passeport as any).estCouleurYeuxValide()).toBeTruthy();
    });

    it(`lorsque couleurYeux est oth, devrait retourner true`, () => {
      const passeport = passeportBuilder('', '', '', '', '', 'oth');

      expect((passeport as any).estCouleurYeuxValide()).toBeTruthy();
    });
  });

  describe(`estIdPasseportValide`, () => {
    it(`lorsque idPasseport est null, devrait retourner false`, () => {
      const passeport = passeportBuilder('', '', '', '', '', '', null);

      expect((passeport as any).estIdPasseportValide()).toBeFalsy();
    });

    it(`lorsque idPasseport est '', devrait retourner false`, () => {
      const passeport = passeportBuilder('', '', '', '', '', '', '');

      expect((passeport as any).estIdPasseportValide()).toBeFalsy();
    });

    it(`lorsque idPasseport est 'aaaaaaaaa', devrait retourner false`, () => {
      const passeport = passeportBuilder('', '', '', '', '', '', 'aaaaaaaaa');

      expect((passeport as any).estIdPasseportValide()).toBeFalsy();
    });

    it(`lorsque idPasseport est '0123456789', devrait retourner false`, () => {
      const passeport = passeportBuilder('', '', '', '', '', '', '0123456789');

      expect((passeport as any).estIdPasseportValide()).toBeFalsy();
    });

    it(`lorsque idPasseport est '01234567', devrait retourner false`, () => {
      const passeport = passeportBuilder('', '', '', '', '', '', '01234567');

      expect((passeport as any).estIdPasseportValide()).toBeFalsy();
    });

    it(`lorsque idPasseport est '123456789', devrait retourner false`, () => {
      const passeport = passeportBuilder('', '', '', '', '', '', '123456789');

      expect((passeport as any).estIdPasseportValide()).toBeFalsy();
    });

    it(`lorsque idPasseport est '0234a6789', devrait retourner false`, () => {
      const passeport = passeportBuilder('', '', '', '', '', '', '0234a6789');

      expect((passeport as any).estIdPasseportValide()).toBeFalsy();
    });

    it(`lorsque idPasseport est '001609709', devrait retourner true`, () => {
      const passeport = passeportBuilder('', '', '', '', '', '', '001609709');

      expect((passeport as any).estIdPasseportValide()).toBeTruthy();
    });

    it(`lorsque idPasseport est '016564875', devrait retourner true`, () => {
      const passeport = passeportBuilder('', '', '', '', '', '', '016564875');

      expect((passeport as any).estIdPasseportValide()).toBeTruthy();
    });
  });
});

function passeportBuilder(
  anneeNaissance = '',
  anneeDelivraison = '',
  anneeExpiration = '',
  grandeur = '',
  couleurCheveux = '',
  couleurYeux = '',
  idPasseport = '',
  idPays = ''
) {
  return new Passeport(
    anneeNaissance,
    anneeDelivraison,
    anneeExpiration,
    grandeur,
    couleurCheveux,
    couleurYeux,
    idPasseport,
    idPays
  );
}
