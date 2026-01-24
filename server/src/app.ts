import "dotenv/config";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import { errorHandlerMiddleware, notFoundMiddleware } from "./middlewares";
import { connectDB } from "./db";

const app = express();
const PORT = process.env.PORT;
const CLIENT_URL = process.env.CLIENT_URL;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors({ origin: CLIENT_URL, credentials: true }));
app.use(morgan("tiny"));

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
app.listen(PORT, async () => {
	try {
		await connectDB();
		console.log("App is running on http://localhost:4000");
	} catch (error) {
		console.log(error);
	}
});

export default app;
