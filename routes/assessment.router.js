import express from 'express';
import {getAllAssessments,getAssessmentQuestion} from './../controller/assessment.controller.js'

const router = express.Router();

// Define a route for the homepage
router.get('/', getAllAssessments);
router.get('/:assessmentId', getAssessmentQuestion);

export default router;
