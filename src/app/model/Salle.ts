export class Salle {
    private _salle1: number | undefined;
    private _nom_salle: string | undefined;
    private _nomdepsalle: string | undefined;

    // Constructor
    constructor(salle1?: number, nom_salle?: string, nomdepsalle?: string) {
        this._salle1 = salle1;
        this._nom_salle = nom_salle;
        this._nomdepsalle = nomdepsalle;
    }

    // Getter and Setter for salle1
    get salle1(): number | undefined {
        return this._salle1;
    }

    set salle1(value: number | undefined) {
        this._salle1 = value;
    }

    // Getter and Setter for nom_salle
    get nom_salle(): string | undefined {
        return this._nom_salle;
    }

    set nom_salle(value: string | undefined) {
        this._nom_salle = value;
    }

    // Getter and Setter for nomdepsalle
    get nomdepsalle(): string | undefined {
        return this._nomdepsalle;
    }

    set nomdepsalle(value: string | undefined) {
        this._nomdepsalle = value;
    }
}
