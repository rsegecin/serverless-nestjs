import * as AWS from 'aws-sdk';
import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { RegisterEmail } from 'src/models/register-email.model';

@Injectable()
export class RegisterRepository {

	async registerEmail(email: RegisterEmail): Promise<boolean> {
		try {
			await new AWS.DynamoDB.DocumentClient()
				.put({
					TableName: process.env.REGISTER_EMAIL_TABLE,
					Item: email,
				})
				.promise();
		} catch (error) {
			throw new InternalServerErrorException(error);
		}

		return true;
	}

	async getRegisterEmail(id: string): Promise<RegisterEmail> {
		let registerEmail;
		try {
			const result = await new AWS.DynamoDB.DocumentClient()
				.get({
					TableName: process.env.REGISTER_EMAIL_TABLE,
					Key: { id },
				})
				.promise();

			registerEmail = result.Item;
		} catch (error) {
			throw new InternalServerErrorException(error);
		}

		if (!registerEmail) {
			throw new NotFoundException(`Order with ID "${id}" not found`);
		}

		return registerEmail;
	}

}