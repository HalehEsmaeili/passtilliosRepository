import 'dotenv/config';
import { Router } from 'express';
import contactRouter from './contact.js';
import crewRouter from './crew.js';
import contentRouter from './content.js';
import imageRouter from './image.js';
import productsRouter from './products.js';
const router = Router();

router.use('/image', imageRouter);

router.use('/contact', contactRouter);

router.use('/content', contentRouter);

router.use('/crew', crewRouter);

router.use('/products', productsRouter);
// Route to get crew images info
//router.post('/crew-infos', getCrewImagesInfo);
// all routes following this middleware require authorization and have access to the user
export default router;