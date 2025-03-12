import type { NextFunction, Request, Response } from "express";
import sanitizeHtml from "sanitize-html";

export function bodySanitizerMiddleware(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	const body = req.body as any;
	for (const key of Object.keys(body)) {
		if (typeof body[key] === "string") {
			body[key] = sanitizeHtml(body[key]);
		}
	}

	next();
}
