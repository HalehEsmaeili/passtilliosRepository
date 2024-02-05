import 'dotenv/config';
import { Router } from 'express';
import contactRouter from './contact.js';
import rateLimit from 'express-rate-limit';
const router = Router();

const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 20, // limit each IP to 10 requests per windowMs
    message: 'Too many requests for contact form from this IP, please try again later.',
  });
  
  // Use the rate limiter middleware only for the contact route
  app.use('/api/contact/saveEmail', contactLimiter);

// add routes here
router.use('/contact', contactRouter);
// all routes following this middleware require authorization and have access to the user
export default router;