import express, { Express, Request, Response } from "express";

const app: Express = express();
const HOST = process.env?.["SERVER_HOST"] || "localhost";
const PORT = Number(process.env?.["SERVER_PORT"]) || 4001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", (_: Request, res: Response) => {
  res.send({ status: "ok" });
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
