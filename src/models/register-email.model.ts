import { IsBoolean, IsEmail, IsHash, IsIP, IsISO8601, IsNotEmpty, IsString } from "class-validator";

export class RegisterEmail {
	@IsString()
	registerEmailId: string;
	
	@IsEmail()
	@IsNotEmpty()
	email: string;
	
	//@IsHash("sha512")
	@IsString()
	@IsNotEmpty()
	validationCodeHash: string;

	@IsString()
	@IsNotEmpty()
	validationCodeSalt: string;
	
	@IsISO8601()
	@IsNotEmpty()
	created: string;
	
	@IsIP()
	@IsNotEmpty()
	ipAddress: string;

	@IsBoolean()
	@IsNotEmpty()
	usedCode: boolean;
}