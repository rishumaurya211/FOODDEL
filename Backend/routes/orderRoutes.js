import express from "express"

import { placeorder, userOrder, verifyOrder, } from "../controlers/orderController.js"
import authMiddleware from "../middleware/auth.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeorder)
orderRouter.post("/verify", verifyOrder)
orderRouter.post("/userorders", authMiddleware, userOrder)



export default orderRouter;
