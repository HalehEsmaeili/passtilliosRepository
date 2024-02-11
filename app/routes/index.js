import 'dotenv/config';
import { Router } from 'express';
import contactRouter from './contact.js';
import rateLimit from 'express-rate-limit';
const router = Router();


// add routes here
router.use('/contact', contactRouter);
// all routes following this middleware require authorization and have access to the user
export default router;