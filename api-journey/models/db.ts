import { Sequelize } from "sequelize";

if (!process.env.PG_URL) {
	throw new Error("PG_URL environment variable is missing");
}

const sequelize = new Sequelize(process.env.PG_URL, {
	logging: false,
});

async function testConnection() {
	try {
		await sequelize.authenticate();
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
}

testConnection();

export default sequelize;
