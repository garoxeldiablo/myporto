import express from "express";
import { api } from "./api.js";

const app = express();
const port = 3000;

app.use(api);
app.get('/myapi', (req,res)=>res.end('hello world'));
app.listen(port, ()=> console.log(`server started port : ${port}`));