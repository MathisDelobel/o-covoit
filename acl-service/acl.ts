enum Role {
	DRIVER = 1,
	PASSENGER = 2,
	ADMIN = 3,
}

interface RoutesConfig {
	[path: string]: {
		[method: string]: Role[];
	};
}

const routesConfig: RoutesConfig = {
	// "/": {
	// 	GET: [Role.DRIVER, Role.DRIVER, Role.ADMIN],
	// },
	"/admin/dashboard": {
		GET: [Role.ADMIN],
	},
};

export default routesConfig;
