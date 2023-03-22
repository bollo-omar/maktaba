import 'dotenv/config';
import 'module-alias/register';

import App from "./app";
import { PORT } from "./utils/constants";

const app = new App(PORT, []);
app.listen();