// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About">
        <p>This is the about me page using the layout component as well!</p>
    </Layout>
  )
}

// Step 3: Export your component
export default AboutPage