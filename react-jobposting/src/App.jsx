// Main component

// Learning snippets

// rafce snippet to create a Arrow functional component; React Arrow Function Export Component
// rfc snippet to create a normal functional component; React Function Component
// names = ['Alice', 'Bob', 'Charlie'];

// const App = () => {
//   return (
//   <> // fragment shorthand
//   <div classNameName="text-5xl">App</div>
//   // Inline style
//   <p style={{ color: 'red', fontSize: '20px' }}>Hello</p>

//   // map: higher order array function
//   <ul>
//     {names.map((name, index) => (
//       <li key={index}>{name}</li>
//     ))}
//   </ul>
//   <p>Hello</p>
//   </>
//   );
// };

// export default App
// Props = Attributes

// const Greeting = (props) => {
//   return <h1>Hello, {props.name}!</h1>;
// };

// React Router
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'

// // Components
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import HomeCards from './components/HomeCards'
// import JobListings from './components/JobListings'
// import ViewAllJobs from './components/ViewAllJobs'

// ^ Shifted to HomePage.jsx

// Main layout
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import JobPage, { jobLoader } from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'
import EditJobPage from './pages/EditJobPage'
import React from 'react'

const App = () => {
  // Function to handle adding a new job
  // Add new Job
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    })
    return
  }

  // Delete job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    })
    return
  }

  // Update job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    })
    return
  }

  // Router setup
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        {/* This route underneath is going to use the above layout; Basically everything in the Route will use the layout route */}
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        {/* Job page  */}
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob}/>}
          loader={jobLoader}
        />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        {/* '*' is "Catch All" or "Splat" segment*/}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}

export default App
