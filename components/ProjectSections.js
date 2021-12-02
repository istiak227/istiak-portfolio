import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectsSection = () => (
  <section className="mb-5">
    <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-orange mb-3">
      Projects
    </h2>
    <div className="text-primary text-3xl sm:text-5xl lg:text-5xl leading-none font-extrabold tracking-tight mb-4">
      <p className="mb-2">Some of the recent projects</p>
      <p className="mb-8">I worked</p>
    </div>

    <ul className="grid grid-cols-1 gap-8  mt-12">
      <ProjectCard
        title="AI & IoT Bootcamp - 2021"
        description="A fun side-project originally built with Spring Boot and MonogDb,
              rebuilt with with Node.js, Express, Mongoose and MongoDb. Deployed
              with Heroku."
      />
      <ProjectCard
        title="Jusadeals Affiliated Ecommerce"
        description="A fun side-project originally built with Spring Boot and MonogDb,
              rebuilt with with Node.js, Express, Mongoose and MongoDb. Deployed
              with Heroku."
      />
    </ul>
  </section>
)

export default ProjectsSection
