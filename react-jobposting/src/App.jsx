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

// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs'

import React from 'react'

const App = () => {
  return (
    <div>
      <>
        {/* <!-- Navbar Component --> */}
        <Navbar />
        {/* <!-- Hero Component --> */}
        {/* Example of props */}
        <Hero title="Test Title" subtitle="This is a subtitle" />
        {/* Card components */}
        {/* <!-- Developers and Employers --> */}
        <HomeCards />

        {/* <!-- Browse Jobs --> */}
        <JobListings />

        {/* <!-- View All Jobs Button --> */}
        <ViewAllJobs />
      </>
    </div>
  )
}

export default App
