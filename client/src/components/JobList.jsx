import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobItem from './JobItem';
import SummaryApi from '../utils/SummaryApi';
import Axios from '../utils/Axios';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');
  const [sortBy, setSortBy] = useState('applicationDate');
  const [sortOrder, setSortOrder] = useState('desc');
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch jobs
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await Axios(SummaryApi.viewJobs);
        setJobs(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setLoading(false);
      }
    };
    
    fetchJobs();
  }, []);

  // Sort and filter jobs
  const getSortedAndFilteredJobs = () => {
    // First filter by status if applicable
    const statusFiltered = filter === 'All' 
      ? jobs 
      : jobs.filter(job => job.status === filter);
    
    // Then filter by search term if applicable
    const searchFiltered = searchTerm 
      ? statusFiltered.filter(job => 
          job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (job.notes && job.notes.toLowerCase().includes(searchTerm.toLowerCase()))
        )
      : statusFiltered;
    
    // Then sort
    return [...searchFiltered].sort((a, b) => {
      let comparison = 0;
      
      switch (sortBy) {
        case 'status':
          comparison = a.status.localeCompare(b.status);
          break;
        case 'applicationDate':
        default:
          comparison = new Date(a.applicationDate) - new Date(b.applicationDate);
          break;
      }
      
      return sortOrder === 'asc' ? comparison : -comparison;
    });
  };

  const sortedAndFilteredJobs = getSortedAndFilteredJobs();

  // Update job in the state
  const updateJobInState = (id, updatedJob) => {
    setJobs(jobs.map(job => job._id === id ? updatedJob : job));
  };

  // Delete job from the state
  const deleteJobFromState = (id) => {
    setJobs(jobs.filter(job => job._id !== id));
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">My Job Applications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {/* Search */}
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700">Search</label>
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by company, role, or notes..."
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          
          {/* Status Filter */}
          <div>
            <label htmlFor="filter" className="block text-sm font-medium text-gray-700">Filter by Status</label>
            <select
              id="filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="All">All Statuses</option>
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Offer">Offer</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
          
          {/* Sort By */}
          <div>
            <label htmlFor="sortBy" className="block text-sm font-medium text-gray-700">Sort By</label>
            <div className="flex mt-1">
              <select
                id="sortBy"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="applicationDate">Application Date</option>
                <option value="status">Status</option>
              </select>
              
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="ml-2 inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                title={sortOrder === 'asc' ? 'Ascending' : 'Descending'}
              >
                {sortOrder === 'asc' ? '↑' : '↓'}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Jobs List */}
      <div className="space-y-4">
        {loading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
          </div>
        ) : sortedAndFilteredJobs.length > 0 ? (
          sortedAndFilteredJobs.map(job => (
            <JobItem 
              key={job._id} 
              job={job} 
              updateJob={updateJobInState}
              deleteJob={deleteJobFromState}
            />
          ))
        ) : (
          <div className="text-center py-6 text-gray-500">
            <p>No jobs found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobList;