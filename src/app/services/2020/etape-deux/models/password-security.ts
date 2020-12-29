export class  PasswordSecurity {
  public minimumOccurence: number;
  public maximumOccurrence: number;
  public letter: string;
  public password: string;

  constructor(param: string) {
    this.convertStringToPasswordSecurity(param);
  }

  public isPasswordValid(): boolean {
    let valid = false
    let countLetter = 0

    Array.from(this.password).forEach(element => {
      if (element === this.letter) {
        countLetter++;
      }
    });

    if (countLetter >= this.minimumOccurence && countLetter <= this.maximumOccurrence) {
      valid = true
    }

    return valid;
  }

  public isLetterPositionValid(): boolean {
    const letterPositionOne = this.password[this.minimumOccurence - 1];
    const letterPositionTwo = this.password[this.maximumOccurrence - 1];

    return letterPositionOne != letterPositionTwo && (letterPositionOne === this.letter || letterPositionTwo === this.letter);
  }

  private convertStringToPasswordSecurity(param: string): void {
    const splitEspace = param.split(' ');
    const splitTiret = splitEspace[0].split('-');
    this.minimumOccurence = Number(splitTiret[0].trim());
    this.maximumOccurrence = Number(splitTiret[1].trim());
    this.letter = splitEspace[1].replace(':', '').trim();
    this.password = splitEspace[2].trim();
  }
}
