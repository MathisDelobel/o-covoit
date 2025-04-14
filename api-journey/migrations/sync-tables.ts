import sequelize from "../models/db";
import "../models/Journey";

async function initDatabase() {
	try {
		await sequelize.sync({ force: true });
		console.log("Tables created");
	} catch (error) {
		console.error("Error syncing database:", error);
	} finally {
		await sequelize.close();
	}
}

initDatabase();
