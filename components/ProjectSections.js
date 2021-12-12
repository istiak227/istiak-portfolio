import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectsSection = () => (
  <section className="mb-5">
    <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-purple-600 mb-3">
      Projects
    </h2>
    <div className="text-primary text-3xl sm:text-5xl lg:text-5xl leading-none font-extrabold tracking-tight mb-4">
      <p className="mb-2">Some recent works</p>
      {/*  <p className="mb-8">I worked</p> */}
    </div>

    <ul className="grid grid-cols-1 gap-8  mt-12">
      <ProjectCard
        title="Guerilla Security Force"
        description="This is a business website for a security agency. Used contentfulfor CMS. API integration via restAPI. The website highlightsbusiness information of thebusiness."
        href="https://guerillaforcebd.com/"
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
