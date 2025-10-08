import * as express from "express";
import * as useragent from "express-useragent";
import * as cors from "cors";
import { corsMiddleware } from "./middlewares/corsMiddleware";
const app = express();

app.use(express.json());
app.use(useragent.express());
app.use(cors(corsMiddleware));

export default app;
