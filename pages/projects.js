import React from 'react'
import Contact from '@/components/Contact'
import Container from '@/components/Container'
import ProjectCard from '@/components/ProjectCard'
import MyRel from '../public/MyRel.png'
import Quantum from '../public/quantum.png'
import CareerCrew from '../public/careerCrew.png'

export default function Projects() {
  return (
    <Container>
      <section className="mb-5">
        {/* <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-orange mb-3">
          Projects
        </h2> */}
        <div className="text-primary text-3xl sm:text-5xl lg:text-5xl leading-none font-extrabold tracking-tight mb-4">
          <p className="mb-2">Projects</p>
          {/*  <p className="mb-8">I worked</p> */}
        </div>
        {/* <p className="text-secondary prose-lg dark:text-gray-200">
          I'm a senior full stack engineer with a passion for everything
          front-end. Welcome to my corner of the internet. I'm glad you're here!
        </p> */}
        <h2 className="text-black dark:text-gray-200 mb-10 mt-4 prose-lg tracking-wide leading-loose">
          Some of the projects I worked on recently. I am mostly comfortable
          working with react framework, but I can develop website that uses JS.
        </h2>
        <ul className="grid grid-cols-1 gap-8  mt-12">
          <ProjectCard
            title="AI & IoT Bootcamp - 2021"
            description="This is an event website for AI & IoT virtual Bootcamp 2021. Participants can register andlog in through the website andview the events. They can alsoparticipate in event quizzes andcompete in leader boards."
            image={Quantum}
          />
          <ProjectCard
            title="Jusadeals Affiliated Ecommerce"
            description="JusaDeals is an affiliate and price comparison website for the top eCommerce vendors. This website would compare Amazon, eBay,firstoffer, and Ali’s product via provider API to increase websitetraffic."
            href="https://www.jusadeals.com/"
          />
          <ProjectCard
            title="MyRel"
            description="This application is used to educate school children on theimplementation of Solar Energy, This project was developed underthe supervision of UNI10 University Malaysia."
            image={MyRel}
          />
          <ProjectCard
            title="Guerilla Security Force"
            description="This is a business website for a security agency. Used contentfulfor CMS. API integration via restAPI. The website highlightsbusiness information of thebusiness."
            href="https://guerillaforcebd.com/"
          />
          <ProjectCard
            title="CareerCrew"
            description="This is a LMS platform specific to IELTS. Students are able topurchase study materials and courses from the website usingonline payment. Verified lecturers can upload courses and studymaterials."
            image={CareerCrew}
          />
        </ul>
      </section>
      <Contact />
    </Container>
  )
}
