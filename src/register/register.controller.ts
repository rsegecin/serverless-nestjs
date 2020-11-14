import { Body, Controller, Post, Req } from '@nestjs/common';
import { RegisterEmailDTO } from 'src/dtos/request/register-email.dto';
import { RegisterService } from './register.service';
import { Request } from 'express';
import { AwsEvent } from 'src/decorators/aws-event.decorator';

@Controller('register')
export class RegisterController {

	constructor (private readonly registerService: RegisterService) {}

	@Post("email")
	async registerEmail(@AwsEvent() awsEvent: AwsEvent, @Req() req: Request, @Body() email: RegisterEmailDTO): Promise<string> {
		console.log("This is the ip address: " + awsEvent.requestContext.identity.sourceIp);		
		const r = await this.registerService.registerEmail(email.email, "123");
		return r;
	}
}
