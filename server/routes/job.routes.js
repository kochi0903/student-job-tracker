// server/routes/jobRoutes.js
import express from 'express';
import * as jobController from '../controllers/jobController.js';

const router = express.Router();

// Routes
router.get('/jobs', jobController.getAllJobs);
router.get('/jobs/:id', jobController.getJobById);
router.post('/jobs', jobController.createJob);
router.put('/jobs/:id', jobController.updateJob);
router.delete('/jobs/:id', jobController.deleteJob);

export default router;