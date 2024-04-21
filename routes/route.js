import express from 'express';
import assesmentRouter from './assessment.router.js'

const router = express.Router();

// Define a route for the homepage
router.use('/assessments', assesmentRouter);

export default router;
