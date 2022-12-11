import { APIGatewayProxyHandler } from 'aws-lambda';

export const launch: APIGatewayProxyHandler = async (event, context) => {
	const a = 1;
	return {
		statusCode: 200,
		body: JSON.stringify({
			message: 'Function executed successfully!',
			context,
			event
		})
	};
};
