import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectsSection = () => (
  <section className="mb-5">
    <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-orange mb-3">
      Projects
    </h2>
    <div className="text-primary text-3xl sm:text-5xl lg:text-5xl leading-none font-extrabold tracking-tight mb-4">
      <p className="mb-2">Some recent works</p>
      {/*  <p className="mb-8">I worked</p> */}
    </div>

    <ul className="grid grid-cols-1 gap-8  mt-12">
      <ProjectCard
        title="AI & IoT Bootcamp - 2021"
        description="This is an event website for AI & IoT virtual Bootcamp 2021. Participants can register andlog in through the website andview the events. They can alsoparticipate in event quizzes andcompete in leader boards."
      />
      <ProjectCard
        title="Jusadeals Affiliated Ecommerce"
        description="JusaDeals is an affiliate and price comparison website for the top eCommerce vendors. This website would compare Amazon, eBay,firstoffer, and Ali’s product via provider API to increase websitetraffic."
        href="https://www.jusadeals.com/"
      />
    </ul>
  </section>
)

export default ProjectsSection
