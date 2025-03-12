import express from "express";
import { router } from "./routers/router";
import { bodySanitizerMiddleware } from "./middlewares/sanitizer";

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users", router);
app.use(bodySanitizerMiddleware);

app.listen(PORT, () => {
	console.log(`Server started at http://localhost:${PORT}`);
});
