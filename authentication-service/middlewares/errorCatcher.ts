import type { NextFunction, Response, Request } from "express";

type MiddlewareFunction = (
	req: Request,
	res: Response,
	next?: NextFunction,
) => any;

export const errorCatcher = (mdw: MiddlewareFunction) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			await mdw(req, res, next);
		} catch (error) {
			console.error(error);
			res
				.status(500)
				.json({ error: "Unexpected server error. Please try again later." });
		}
	};
};
