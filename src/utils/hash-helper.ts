import crypto = require("crypto");

export class HashHelper {

	static GenerateHash(value: string) : string {		
		const hmac = crypto.createHmac("sha256", "asdsadasdsadsa");
		const hash = hmac.update(value);
		return hash.digest("hex");
	}
}