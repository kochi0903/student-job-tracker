// server/controllers/jobController.js
import Job from '../models/Job.js';

// Get all jobs
export const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ applicationDate: -1 });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single job
export const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new job
export const createJob = async (req, res) => {
  try {
    // Check for required fields
    const { company, role } = req.body;
    if (!company || !role) {
      return res.status(400).json({ 
        message: 'Company and role fields are required' 
      });
    }

    const newJob = new Job(req.body);
    const savedJob = await newJob.save();
    res.status(201).json({message : "Job Added Successfully"});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a job
export const updateJob = async (req, res) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedJob) return res.status(404).json({ message: 'Job not found' });
    res.json(updatedJob);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a job
export const deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.json({ message: 'Job deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};