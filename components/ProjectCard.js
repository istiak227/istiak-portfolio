export default function ProjectCard({ title, description, href, icon, tags }) {
  return (
    <>
      <li className="bg-gray-200 rounded-3xl dark:bg-gray-900">
        <div className="p-6 md:p-10 flex flex-col-reverse ">
          <div className="mt-8 md:max-w-lg">
            <p className="text-2xl lg:text-3xl font-extrabold text-primary mb-2">
             {title}
            </p>
            <p className="text-secondary prose-lg mb-3">
              {description}
            </p>
            <a href={href} target="_blank" rel="noreferrer">
              <div className="inline-flex text-base sm:text-lg lg:text-base xl:text-lg font-medium transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-current focus:outline-none rounded-md text-orange hover:text-orange-hover mt-2">
                <p>Visit -{'>'}</p>
              </div>
            </a>
          </div>
          <div>Build with</div>
        </div>
      </li>
    </>
  )
}
