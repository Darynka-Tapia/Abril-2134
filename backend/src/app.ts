import express, { type Express, type Request, type Response } from 'express';
import balanceRouter from "./routes/balance.js";
import cors from "cors";

const app: Express = express();

app.use(cors());
app.use(express.json());


app.use("/api", balanceRouter);

app.listen(3000);