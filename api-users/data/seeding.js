// On crée la collection users
db.createCollection("users");

// On insère les données dans la collection users.
db.users.insertMany([
	{
		firstname: "Jean",
		lastname: "Valjean",
		email: "jean@valjean.fr",
		password: "$2b$10$Z8iEoVVkWZa4mVxds4.Ti.ZquuOetvT8.dwA.VL.TqTiyLi1yRCou",
		role_id: 1,
	},
	{
		firstname: "Cosette",
		lastname: "Valjean",
		email: "cosette@valjean.fr",
		password: "$2b$10$Z8iEoVVkWZa4mVxds4.Ti.ZquuOetvT8.dwA.VL.TqTiyLi1yRCou",
		role_id: 2,
	},
	{
		firstname: "Marius",
		lastname: "Pontmercy",
		email: "marius@pontmercy.fr",
		password: "$2b$10$Z8iEoVVkWZa4mVxds4.Ti.ZquuOetvT8.dwA.VL.TqTiyLi1yRCou",
		role_id: 2,
	},
	{
		firstname: "Mathis",
		lastname: "Delobel",
		email: "delobelmathis@gmail.com",
		password: "mathis",
		role_id: 3,
	},
]);
