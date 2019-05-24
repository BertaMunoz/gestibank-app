export class Operation{	
	private idOp: Number; 
	private dateOp: Date;
	private typeOp: CharacterData;
	private montantOp: Number;
	private libelleOp: String;

	public constructor (idOp: Number ,dateOp :Date, typeOp: CharacterData,  montantOp: Number, libelleOp: String){
		this.idOp = idOp;
		this.dateOp = dateOp;
		this.typeOp = typeOp;
		this.montantOp = montantOp;
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

	public getMontantOp(): Number {
		return this.montantOp;
	}
	public setMontantOp(value: Number) {
		this.montantOp = value;
	}

	public getLibelleOp(): String {
		return this.libelleOp;
	}
	public setLibelleOp(value: String) {
		this.libelleOp = value;
	}
}
