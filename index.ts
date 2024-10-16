import express, {Express, Request, Response} from "express";
import * as database from "./config/database";
import dotenv from "dotenv";

import clientRoutes from "./routes/client/index.route";
import adminRoutes from "./routes/admin/index.route";
import { systemConfig } from "./config/config";
import path from "path";

dotenv.config();

database.connect();

const app: Express = express();
const port: number | string = process.env.PORT;

app.use(express.static("public"));

app.set("views", "./views");
app.set("view engine", "pug");

//TinyMCE
app.use('/tinymce', express.static(path.join(__dirname, 'node_modules', 'tinymce')));
//End TinyMCE

//App Local Variables
app.locals.prefixAdmin = systemConfig.prefixAdmin;

//Admin Routes
adminRoutes(app);

// Client Routes
clientRoutes(app);


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});