// On crée la collection users
db.createCollection("users");

// On insère les données dans la collection users.
db.users.insertMany([
	{
		firstname: "Jean",
		lastname: "Valjean",
		email: "jean@valjean.fr",
		password: "$2b$10$Z8iEoVVkWZa4mVxds4.Ti.ZquuOetvT8.dwA.VL.TqTiyLi1yRCou",
		description: "Je suis un ancien bagnard",
		image:
			"https://static.wikia.nocookie.net/les-miserables/images/f/f9/Jean_Valjean.jpg/revision/latest?cb=20161217082048&path-prefix=fr",
		role_id: 1,
	},
	{
		firstname: "Cosette",
		lastname: "Valjean",
		email: "cosette@valjean.fr",
		password: "$2b$10$Z8iEoVVkWZa4mVxds4.Ti.ZquuOetvT8.dwA.VL.TqTiyLi1yRCou",
		description: "Je suis la fille de Jean Valjean",
		image:
			"https://static.wikia.nocookie.net/les-miserables/images/9/9e/Cosette.jpg/revision/latest?cb=20161217082109&path-prefix=fr",
		role_id: 2,
	},
	{
		firstname: "Marius",
		lastname: "Pontmercy",
		email: "marius@pontmercy.fr",
		password: "$2b$10$Z8iEoVVkWZa4mVxds4.Ti.ZquuOetvT8.dwA.VL.TqTiyLi1yRCou",
		description: "Je suis le mari de Cosette",
		image:
			"https://static.wikia.nocookie.net/les-miserables/images/2/2b/Marius.jpg/revision/latest?cb=20161217082128&path-prefix=fr",
		role_id: 2,
	},
	{
		firstname: "Mathis",
		lastname: "Delobel",
		email: "delobelmathis@gmail.com",
		password: "mathis",
		description: "Je suis le mari de Cosette",
		image:
			"https://static.wikia.nocookie.net/les-miserables/images/2/2b/Marius.jpg/revision/latest?cb=20161217082128&path-prefix=fr",
		role_id: 3,
	},
]);
