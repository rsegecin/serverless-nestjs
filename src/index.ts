import { APIGatewayProxyHandler } from 'aws-lambda';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Server } from 'http';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as awsServerlessExpress from 'aws-serverless-express';
import * as express from 'express';
import { ValidationPipe } from '@nestjs/common';

import {} from 'aws-serverless-express/middleware';

let cachedServer: Server;

const bootstrapServer = async (): Promise<Server> => {
	const expressApp = express();
	const adapter = new ExpressAdapter(expressApp);
	const app = await NestFactory.create(AppModule, adapter);
	app.enableCors();

	app.useGlobalPipes(new ValidationPipe({
		whitelist: true,
		forbidNonWhitelisted: true,
		transform: true,
	}));
	
	await app.init();
	return awsServerlessExpress.createServer(expressApp);
}

export const handler: APIGatewayProxyHandler = async (event, context) => {
	if (!cachedServer) {
		cachedServer = await bootstrapServer()
	}

	console.log(event);
	console.log(context);

	return awsServerlessExpress.proxy(cachedServer, event, context, 'PROMISE').promise;
};
