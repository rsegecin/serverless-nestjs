import { IsEmail, IsHash, IsNotEmpty } from "class-validator";

export class Hasher {
	@IsEmail()
	@IsNotEmpty()
	salt: string;
	
	@IsHash("sha512")
	@IsNotEmpty()
	hash: string;
}