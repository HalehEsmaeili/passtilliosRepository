import 'dotenv/config';
import { Router } from 'express';
import contactRouter from './contact.js';
import crewRouter from './crew.js';
import contentRouter from './content.js';
import imageRouter from './image.js';
import rateLimit from 'express-rate-limit';
const router = Router();

// add routes here
router.use('/image', imageRouter);

// add routes here
router.use('/contact', contactRouter);

// add routes here
router.use('/content', contentRouter);

// add routes here
router.use('/crew', crewRouter);
// Route to get crew images info
//router.post('/crew-infos', getCrewImagesInfo);
// all routes following this middleware require authorization and have access to the user
export default router;