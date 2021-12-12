import Image from 'next/image'
export default function ProjectCard({
  title,
  description,
  href,
  tags,
  image,
}) {
  return (
    <>
      <li className="bg-gray-200 rounded-3xl dark:bg-gray-900">
        <div className="p-6 md:p-10 flex flex-col-reverse ">
          <div className="mt-4 ">
            <p className="text-2xl lg:text-3xl font-extrabold text-primary mb-2">
              {title}
            </p>
            <p className="text-secondary prose-lg mb-3">{description}</p>
            {/* <div>Build with</div> */}
            {href ? (
              <a href={href} target="_blank" rel="noreferrer">
                <div className="inline-flex text-base sm:text-lg lg:text-base xl:text-lg font-medium transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-current focus:outline-none rounded-md text-orange hover:text-orange-hover mt-2">
                  <p className="underline">Visit</p>
                </div>
              </a>
            ) : (
              ''
            )}
            {image ? (
              <div>
                <Image className="select-none" src={image} alt={title} />
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </li>
    </>
  )
}
