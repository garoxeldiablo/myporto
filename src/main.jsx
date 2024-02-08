import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import Banner from './Banner.jsx'
import Hero from './Hero.jsx'
import Timeline from './Timeline.jsx'
import Skill from './skill.jsx'
import Certification from './Certification.jsx'
import Linkedin from './Linkedin.jsx'
import Footer from './Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Banner />
    <Hero />
    <Timeline />
    <Skill />
    <Certification/>
    <Linkedin />
    <Footer />
  </React.StrictMode>,
)
