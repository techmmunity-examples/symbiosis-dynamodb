module.exports = {
	entitiesDir: ["src/entity.ts"],
	namingStrategy: {
		entity: "snake_case",
	},
	suffix: {
		entity: {
			remove: "Entity",
		},
	},
	databaseConfig: {
		region: process.env.DYNAMODB_REGION,
		credentials: {
			accessKeyId: process.env.DYNAMODB_ACCESS_KEY_ID,
			secretAccessKey: process.env.DYNAMODB_SECRET_ACCESS_KEY,
		},
	},
}
