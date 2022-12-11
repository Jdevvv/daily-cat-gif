import type { Serverless } from 'serverless/aws';

const serverlessConfiguration: Serverless = {
	service: 'daily-cat-gif',
	frameworkVersion: '2',
	provider: {
		name: 'aws',
		runtime: 'nodejs14.x',
		region: 'eu-west-3',
		apiGateway: {
			minimumCompressionSize: 1024
		},
		lambdaHashingVersion: 20201221,
		versionFunctions: false,
		environment: {}
	},
	custom: {
		prune: {
			automatic: true,
			number: 3
		}
	},
	plugins: [
		'serverless-esbuild',
		'serverless-offline',
		'serverless-prune-plugin'
	],
	package: {
		individually: true
	},
	functions: {
		start: {
			handler: 'src/index.launch',
			events: [
				{
					http: {
						method: 'GET',
						path: 'launch'
					}
				}
			]
		}
	}
};

module.exports = serverlessConfiguration;
