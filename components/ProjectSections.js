import React from 'react';

const ProjectsSection = () => (
  <section className="mb-24">
    <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-orange mb-3">
      Projects
    </h2>
    <div className="text-primary text-3xl sm:text-5xl lg:text-5xl leading-none font-extrabold tracking-tight mb-4">
      <p className="mb-2">I like to build things.</p>
      <p className="mb-8">Here's a few.</p>
    </div>

    <ul className="grid grid-cols-1 gap-8  mt-12">
      <li className="bg-secondary rounded-3xl">
        <div className="p-6 md:p-10 flex flex-col-reverse ">
          <div className="mt-8 md:max-w-lg">
            <p className="text-2xl lg:text-3xl font-extrabold text-primary mb-2">
              bundleapps.io
            </p>
            <p className="text-secondary prose-lg mb-3">
              A startup consultant company needed a website spun up quickly in
              order to publish their first iOS application. Built with Tailwind
              UI, I was able to put something together for them by the end of
              the day.
            </p>
            <a href="https://bundleapps.io/" target="_blank" rel="noreferrer">
              <div className="inline-flex text-base sm:text-lg lg:text-base xl:text-lg font-medium transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-current focus:outline-none rounded-md text-orange hover:text-orange-hover mt-2">
                <p>Visit -{'>'}</p>
              </div>
            </a>
          </div>
          <div>
            image
          </div>
        </div>
      </li>
      <li className="bg-secondary rounded-3xl relative overflow-hidden">
        <div className="p-6 md:p-10">
          <div>
            Image
          </div>
          <div className="mt-9">
            <p className="text-2xl lg:text-3xl font-extrabold text-primary mb-2">
              officeapi.dev
            </p>
            <p className="text-secondary prose-lg mb-3">
              A fun side-project originally built with Spring Boot and MonogDb,
              rebuilt with with Node.js, Express, Mongoose and MongoDb. Deployed
              with Heroku.
            </p>
            <a
              href="https://www.officeapi.dev/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="inline-flex text-base sm:text-lg lg:text-base xl:text-lg font-medium transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-current focus:outline-none rounded-md text-orange hover:text-orange-hover mt-2">
                <p>Visit-{'>'}</p>
              </div>
            </a>
          </div>
        </div>
      </li>
      <li className="bg-secondary rounded-3xl overflow-hidden p-6 md:p-10 flex flex-col items-center">
        <div className="mt-8">
          <p className="text-2xl lg:text-3xl font-extrabold text-primary mb-2">
            NgLimeade
          </p>
          <p className="text-coolGray-500 dark:text-coolGray-400 prose-lg mb-3">
            NgLimeade is an Angular Toast Library that aims to get toast
            notifications up and running in less than a minute! No joke! Check
            it out for yourself!
          </p>
          <a
            href="https://www.npmjs.com/package/ng-limeade"
            target="_blank"
            rel="noreferrer"
          >
            <div className="inline-flex text-base sm:text-lg lg:text-base xl:text-lg font-medium transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-current focus:outline-none rounded-md text-orange hover:text-orange-hover mt-2">
              <p>Visit-{'>'}</p>
            </div>
          </a>
        </div>
      </li>
    </ul>
  </section>
);

export default ProjectsSection;