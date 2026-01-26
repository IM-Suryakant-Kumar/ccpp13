import "dotenv/config";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import {
	authenticateUser,
	errorHandlerMiddleware,
	notFoundMiddleware,
} from "./middlewares";
import { noteRouter, authRouter } from "./routes";
import { connect } from "mongoose";

const app = express();
const PORT = process.env.PORT;
const CLIENT_URL = process.env.CLIENT_URL;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors({ origin: CLIENT_URL, credentials: true }));
app.use(morgan("tiny"));

// routers
app.use("/auth", authRouter);
app.use("/note", authenticateUser, noteRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
app.listen(PORT, async () => {
	try {
		await connect(MONGO_URI!);
		console.log("App is running on http://localhost:4000");
	} catch (error) {
		console.log(error);
	}
});

export default app;
