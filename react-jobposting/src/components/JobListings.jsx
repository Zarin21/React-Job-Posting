import React from 'react'
import JobListing from './JobListing'
import Spinner from './Spinner'
import { useState, useEffect } from 'react'

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]) // state to hold job listings
  const [loading, setLoading] = useState(true) // state to handle loading

  // useEffect to simulate fetching data, here we use static data
  //  Everytime something changes in the dependency array, the effect will run again
  useEffect(() => {
    // Simulate fetching data
    const fetchJobs = async () => {
      const apiUrl = isHome
        ? '/api/jobs?_limit=3'
        : '/api/jobs'
      try {
        const res = await fetch(apiUrl) // replace with data source
        const data = await res.json()
        setJobs(data)
      } catch (error) {
        console.log('Error fetching jobs:', error)
      } finally {
        setLoading(false) // set loading to false after fetching
      }
    }
    fetchJobs()
  }, []) // empty dependency array to run only once on mount

  return (
    <div>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? 'Latest Job Listings' : 'Browse Job Listings'}
          </h2>
          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <JobListing key={job.id} job={job} /> // passing job as prop and needs to have a key
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default JobListings
