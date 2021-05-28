import { Router } from 'express';
const router = Router()
import { getIndex } from "../controllers/index.controllers";

router
    .route("/")
    .get(getIndex)

export default router;