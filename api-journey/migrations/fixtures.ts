import sequelize from "../models/db";
import Journey from "../models/Journey";

async function fixtures() {
	const journeys = [
		// Trajets Paris (départs fréquents)
		{
			departure: "Paris",
			destination: "Lyon",
			date: new Date(Date.now() + 1 * 86400000),
			seatsAvailable: 4,
			price: 35.5,
			time: 290,
		},
		{
			departure: "Paris",
			destination: "Marseille",
			date: new Date(Date.now() + 2 * 86400000),
			seatsAvailable: 2,
			price: 55.0,
			time: 480,
		},
		{
			departure: "Paris",
			destination: "Bordeaux",
			date: new Date(Date.now() + 1 * 86400000),
			seatsAvailable: 3,
			price: 40.0,
			time: 350,
		},
		{
			departure: "Paris",
			destination: "Lille",
			date: new Date(Date.now() + 3 * 86400000),
			seatsAvailable: 5,
			price: 25.0,
			time: 150,
		},

		// Trajets depuis Lyon
		{
			departure: "Lyon",
			destination: "Paris",
			date: new Date(Date.now() + 1 * 86400000),
			seatsAvailable: 3,
			price: 32.0,
			time: 280,
		},
		{
			departure: "Lyon",
			destination: "Marseille",
			date: new Date(Date.now() + 2 * 86400000),
			seatsAvailable: 4,
			price: 30.0,
			time: 180,
		},
		{
			departure: "Lyon",
			destination: "Toulouse",
			date: new Date(Date.now() + 4 * 86400000),
			seatsAvailable: 2,
			price: 45.0,
			time: 320,
		},

		// Trajets depuis Marseille
		{
			departure: "Marseille",
			destination: "Nice",
			date: new Date(Date.now() + 1 * 86400000),
			seatsAvailable: 4,
			price: 20.0,
			time: 120,
		},
		{
			departure: "Marseille",
			destination: "Lyon",
			date: new Date(Date.now() + 3 * 86400000),
			seatsAvailable: 1,
			price: 28.0,
			time: 175,
		},
		{
			departure: "Marseille",
			destination: "Paris",
			date: new Date(Date.now() + 5 * 86400000),
			seatsAvailable: 3,
			price: 50.0,
			time: 490,
		},

		// Trajets depuis Bordeaux
		{
			departure: "Bordeaux",
			destination: "Toulouse",
			date: new Date(Date.now() + 2 * 86400000),
			seatsAvailable: 3,
			price: 15.0,
			time: 150,
		},
		{
			departure: "Bordeaux",
			destination: "Paris",
			date: new Date(Date.now() + 1 * 86400000),
			seatsAvailable: 2,
			price: 38.0,
			time: 340,
		},
		{
			departure: "Bordeaux",
			destination: "Lyon",
			date: new Date(Date.now() + 4 * 86400000),
			seatsAvailable: 4,
			price: 42.0,
			time: 360,
		},

		// Trajets depuis d'autres villes
		{
			departure: "Nantes",
			destination: "Rennes",
			date: new Date(Date.now() + 1 * 86400000),
			seatsAvailable: 3,
			price: 12.0,
			time: 60,
		},
		{
			departure: "Strasbourg",
			destination: "Nancy",
			date: new Date(Date.now() + 3 * 86400000),
			seatsAvailable: 2,
			price: 10.0,
			time: 45,
		},
		{
			departure: "Toulouse",
			destination: "Montpellier",
			date: new Date(Date.now() + 2 * 86400000),
			seatsAvailable: 4,
			price: 18.0,
			time: 120,
		},
		{
			departure: "Lille",
			destination: "Bruxelles",
			date: new Date(Date.now() + 1 * 86400000),
			seatsAvailable: 3,
			price: 20.0,
			time: 90,
		},

		// Trajets avec peu de places disponibles
		{
			departure: "Nice",
			destination: "Marseille",
			date: new Date(Date.now() + 1 * 86400000),
			seatsAvailable: 1,
			price: 22.0,
			time: 130,
		},
		{
			departure: "Rennes",
			destination: "Paris",
			date: new Date(Date.now() + 2 * 86400000),
			seatsAvailable: 1,
			price: 30.0,
			time: 240,
		},

		// Trajets longue distance
		{
			departure: "Paris",
			destination: "Nice",
			date: new Date(Date.now() + 7 * 86400000),
			seatsAvailable: 4,
			price: 70.0,
			time: 600,
		},
		{
			departure: "Lyon",
			destination: "Bordeaux",
			date: new Date(Date.now() + 5 * 86400000),
			seatsAvailable: 3,
			price: 50.0,
			time: 400,
		},
	];

	for (const journey of journeys) {
		await Journey.create(journey);
	}
}

fixtures()
	.then(() => {
		console.log("Fixtures created successfully");
	})
	.catch((error) => {
		console.error("Error creating fixtures:", error);
	})
	.finally(() => {
		sequelize.close();
	});
