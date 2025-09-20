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
import React from 'react'

// Router setup
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      {/* This route underneath is going to use the above layout; Basically everything in the Route will use the layout route */}
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
       {/* Job page  */}
      <Route path="/jobs/:id" element={<JobPage />} loader = {jobLoader} />
      {/* '*' is "Catch All" or "Splat" segment*/}
      <Route path="*" element={<NotFoundPage />} />
  
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
