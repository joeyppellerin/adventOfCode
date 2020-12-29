import { SousReponses } from "src/app/models/reponses";

export class AdventOfCode {
  public year: string;
  public reponses: Array<SousReponses>;

  constructor(year: string, reponses: Array<SousReponses>) {
    this.year = year;
    this.reponses = reponses;
  }
}
