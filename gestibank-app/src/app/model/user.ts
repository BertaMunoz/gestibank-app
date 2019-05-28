export class User{	
	private login: String; 
	private motDePasse: String;	

	public constructor (login: String, motDePasse: String){
		this.login = login;
		this.motDePasse = motDePasse;
	}

	public getLogin(): String {
		return this.login;
	}
	public setLogin(value: String) {
		this.login = value;
    }
    
    public getMotDePasse(): String {
		return this.motDePasse;
	}
	public setMotDePasse(value: String) {
		this.motDePasse = value;
	}
}
