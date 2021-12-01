export default function ProjectCard({ title, description, href, icon, tags }) {
  return (
    <>
      <a
        className="mb-4 hover:shadow"
        href={href}
        aria-label={title}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex items-center border border-gray-200 dark:border-gray-800 rounded p-4">
          {/* */}
          <div className="flex items-center border border-gray-200 dark:border-gray-800 rounded p-4">
            <div className="h-8 w-8 ml-2 mr-4">
              <svg
                width="260"
                height="260"
                viewBox="0 0 260 260"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 min-w-lg text-gray-900 dark:text-gray-100 "
              >
                <rect width="260" height="260" rx="11" fill="#FBBF24" />
                <path
                  d="M76.3492 60.7143C76.3492 57.9529 78.5878 55.7143 81.3492 55.7143H260V107.302H81.3492C78.5878 107.302 76.3492 105.063 76.3492 102.302V60.7143Z"
                  fill="white"
                />
                <rect
                  x="156.825"
                  y="260"
                  width="156.825"
                  height="51.5873"
                  transform="rotate(-90 156.825 260)"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
              {title}
            </h4>
            <p className="leading-5 text-gray-700 dark:text-gray-300">
              {description}
            </p>
          </div>
        </div>
      </a>
    </>
  )
}
