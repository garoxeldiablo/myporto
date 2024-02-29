import dataCert from "../controller/controls.js";
import express from "express";

const route = express.Router()

route.get('/cert', dataCert);

export default route;