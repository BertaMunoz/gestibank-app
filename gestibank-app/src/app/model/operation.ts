export class Operation{	
	private idOp: Number; 
	private dateOp: Date;
	private typeOp: CharacterData;
	private montantOpDebit: Number;
	private montantOpcredit: Number;
	private libelleOp: String;
	montantOpCredit: Number;

	public constructor (idOp: Number, dateOp :Date, typeOp: CharacterData,  montantOpDebit: Number, montantOpcredit: number, libelleOp: String){
		this.idOp = idOp;
		this.dateOp = dateOp;
		this.typeOp = typeOp;
		this.montantOpDebit = montantOpDebit;
		this.montantOpcredit = montantOpcredit;
		this.libelleOp = libelleOp;
	}

	public getIdOp(): Number {
		return this.idOp;
	}
	public setIdOp(value: Number) {
		this.idOp = value;
	}

	public getDateOp(): Date {
		return this.dateOp;
	}
	public setDateOp(value: Date) {
		this.dateOp = value;
	}

	public getTypeOp(): CharacterData {
		return this.typeOp;
	}
	public setgetTypeOp(value: CharacterData) {
		this.typeOp = value;
	}

	public getMontantOpDebit(): Number {
		return this.montantOpDebit;
	}
	public setMontantOpDebit(value: Number) {
		this.montantOpDebit = value;
	}

	public getMontantOpCredit(): Number {
		return this.montantOpCredit;
	}
	public setMontantOpCredit(value: Number) {
		this.montantOpCredit = value;
	}

	public getLibelleOp(): String {
		return this.libelleOp;
	}
	public setLibelleOp(value: String) {
		this.libelleOp = value;
	}
}
