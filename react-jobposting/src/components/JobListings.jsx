import React from 'react'
import jobs from '../jobs.json'
import JobListing from './JobListing'
const JobListings = ( {isHome = false }) => {
  const jobListings = isHome ? jobs.slice(0, 3): jobs;// Get the first 3 jobs from the array
  return (
    <div>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? 'Latest Job Listings' : 'Browse Job Listings'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobListings.map((job) => (
              <JobListing key={job.id} job={job} /> // passing job as prop and needs to have a key
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default JobListings
