import express from "express";
import route from "./view/route.js";

const app = express();
const port = 3000;
app.use(route);

app.listen(port, ()=> console.log(`server started port : ${port}`));