import Link from 'next/link'
import { FaTwitter, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa'

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
)

export default function Footer() {
  return (
    <footer className="bg-primary" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl py-12 px-4 sm:px-6 lg:py-6 lg:px-8 border-t border-primary">
        <div className="xl:grid xl:grid-cols-2 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-primary tracking-wider uppercase">
                  Pages
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      className="text-base text-footer-link hover:text-footer-link-hover"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-base text-footer-link hover:text-footer-link-hover"
                      href="/about"
                    >
                      About
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-base text-footer-link hover:text-footer-link-hover"
                      href="/journals"
                    >
                      Journals
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-base text-footer-link hover:text-footer-link-hover"
                      href="/projects"
                    >
                      Projects
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-primary tracking-wider uppercase">
                  Extra
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      className="text-base text-footer-link hover:text-footer-link-hover"
                      href="/newsletter"
                    >
                      Newsletter
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-base text-footer-link hover:text-footer-link-hover"
                      href="/changelog"
                    >
                      Changelog
                    </Link>
                  </li>

                  <li>
                    <a
                      href="https://www.notion.so/9f35162787e0448094188b66304cf9f6?v=1b9c4e146edf46148fe7b1c5346cbea4"
                      target="_blank"
                      rel="noreferrer"
                      className="text-base text-footer-link hover:text-footer-link-hover"
                    >
                      Snippets
                    </a>
                  </li>

                  <li>
                    <a
                      href=""
                      target="_blank"
                      rel="noreferrer"
                      className="text-base text-footer-link hover:text-footer-link-hover"
                    >
                      Resume
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8" />
          </div>
        </div>
      </div>

      <div className="mt-2 py-8 px-4 sm:px-6 lg:px-8 md:flex md:items-center md:justify-between">
        <div className="flex space-x-6 md:order-2">
          <a
            href="https://twitter.com/Ist227"
            className="text-footer-icon hover:text-footer-icon-hover"
          >
            <FaTwitter className="h-5 w-5" />
          </a>

          <a
            href="https://github.com/istiak227"
            className="text-footer-icon hover:text-footer-icon-hover"
          >
            <span className="sr-only">GitHub</span>
            <FaGithub className="h-5 w-5" />
          </a>

          <a
            href="https://discord.com/users/Ezio(Istiak)#6851"
            className="text-footer-icon hover:text-footer-icon-hover"
          >
            <span className="sr-only">Discord</span>
            <FaDiscord className="h-5 w-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/istiak227/"
            className="text-footer-icon hover:text-footer-icon-hover"
          >
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="h-5 w-5" />
          </a>
          {/* <a
            href=""
            className="text-footer-icon hover:text-footer-icon-hover"
          >
            <span className="sr-only">RSS</span>
            <FaRss className="h-5 w-5" />
          </a> */}
        </div>
        <p className="mt-8 text-base text-footer-icon md:mt-0 md:order-1">
          &copy; {new Date().getFullYear()} Istiak Ahmed. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
