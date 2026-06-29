import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import {
	authenticateUser,
	errorHandlerMiddleware,
	notFoundMiddleware,
} from "./middlewares";
import { noteRouter, authRouter } from "./routes";
import { connectDB } from "./db";

const app = express();
const PORT = process.env.PORT;

app.set("trust proxy", 1);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(morgan("tiny"));

// routers
app.use("/auth", authRouter);
app.use("/note", authenticateUser, noteRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
(async () => {
	try {
		await connectDB();
		app.listen(PORT, async () =>
			console.log("App is running on http://localhost:4000"),
		);
	} catch (error) {
		console.log(error);
	}
})();

export default app;
