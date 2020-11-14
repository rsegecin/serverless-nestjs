interface AwsContext {
	awsRequestId: string;
	callbackWaitsForEmptyEventLoop: boolean;
	clientContext: any;
	functionName: string;
	functionVersion: string;
	identity: any;
	invokedFunctionArn: string;
	logGroupName: string;
	logStreamName: string;
	memoryLimitInMB: string;
	getRemainingTimeInMillis: any;
	done: any;
	fail: any;
	succeed: any;
}