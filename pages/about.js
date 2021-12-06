import Container from '@/components/Container'
import Image from 'next/image'
import React from 'react'
import avatar from '../public/avatar.jpg'
import Link from 'next/link'
import Contact from '@/components/Contact'

export default function About() {
  return (
    <Container>
      <section className="mb-10">
        <div className=" flex justify-between items-center relative">
          <div className=" w-full space-y-8 md:flex-row-reverse md:justify-between">
            <div className="text-left">
              <div className="rounded-full h-24 w-24 sm:w-44 sm:h-44 ring ring-green-600 ring-offset-4 ring-offset-green-100">
                <Image
                  src={avatar}
                  alt="Istiak Ahmed"
                  className="rounded-full"
                />
              </div>
              <h2 className="sm:text-lg sm:leading-snug mt-10 font-semibold tracking-wide uppercase text-teal-500 dark:text-teal-400 mb-3">
                Hey there,
              </h2>
              <h1 className="text-primary text-3xl sm:text-5xl lg:text-5xl leading-none font-extrabold tracking-tight mb-4 dark:text-gray-200">
                This is Istiak
              </h1>
              <p className="text-secondary prose-lg dark:text-gray-200">
                I'm a senior full stack engineer with a passion for everything.
                This portfolio is to proof my credibility as a web developer.
                It's not much but at least I was able to provide you with a URL.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 text-5xl leading-none text-coolGray-500 dark:text-coolGray-400 " />
      </section>
      <section className="mb-10">
        <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-blue-700 mb-3">
          About Me
        </h2>
        <p className="text-primary text-3xl sm:text-5xl lg:text-5xl leading-none font-extrabold tracking-tight mb-4">
          Here's my story.
        </p>
        <div className="text-secondary prose-lg mb-6 dark:text-gray-200">
          <p>
            My full name is Istiak Ahmed, I am passionate full-stack engineer. I
            love to talk about start-up, tech and business. I have a bechelor
            degree in Information Technology with a decent CGPA. Though it does
            not matters in web dev world!
          </p>
          <p>
            I love programming challenges and solve problems technically. From
            scratch to MVP I will be there to build the next startup idea.
          </p>
          <p>
            I specialize in front-end development and make it my mission to
            translate user-focussed designs into pixel-perfect websites or
            applications that run blazing fast.
          </p>
          <p>
            I’m currently part of the team at{' '}
            <a
              className="underline text-amber hover:text-amber-hover"
              href="https://www.traideas.com/"
              target="_blank"
              rel="noreferrer"
            >
              Traideas
            </a>{' '}
            where I help architect and develop full-stack RESTful microservices,
            train and prepare developers for delivery, and assist in leading the
            front-end practice in a lab-based working environment.
          </p>
          <p>
            I always like learning new things. I often write about my thoughts
            on my{' '}
            <Link
              className="underline text-amber hover:text-amber-hover"
              href="/blog"
            >
              <a>journal,</a>
            </Link>{' '}
            and post hot tech topics on{' '}
            <a
              className="underline  text-amber hover:text-amber-hover"
              href="https://www.linkedin.com/in/istiak227/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </section>
      <Contact />
    </Container>
  )
}
