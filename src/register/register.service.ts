import { Injectable } from '@nestjs/common';
import { RegisterEmail } from 'src/models/register-email.model';
import { RegisterRepository } from './register.repository';
import { v4 as uuid } from 'uuid';

@Injectable()
export class RegisterService {
	
	constructor (private readonly registerRepository: RegisterRepository) {}

	async registerEmail(email: string, ipAddress: string): Promise<string> {

		const register = new RegisterEmail();

		register.email = email;
		register.created = new Date().toISOString();
		register.ipAddress = ipAddress;
		register.registerEmailId = uuid();
		register.validationCodeHash = "asd";
		register.validationCodeSalt = "asd";
		
		try {
			await this.registerRepository.registerEmail(register);
			return "ok";
		} catch (error) {
			return "error " + error;	
		}
	}

}
