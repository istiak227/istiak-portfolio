import React from 'react'
import Image from 'next/image'
import img from '../public/sea.jpg'

const ImageSection = () => {
  return (
    <section className="mb-5">
      <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-indigo mb-3">
        Lense
      </h2>
      <p className="text-primary text-3xl sm:text-5xl lg:text-5xl leading-none font-extrabold tracking-tight mb-10">
        The way I see the world
      </p>
      <div>
        <div className="mt-10">
          <div className="flex gap-4 flex-col md:flex-row">
            <button
              className="relative transition z-2 duration-500 ease-in-out text-yellow-300 transform hover:text-black hover:translate-y-0 hover:scale-105 hover:z-40"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col">
                <div>
                  <Image className="rounded-lg" alt="Vercel logo" src={img} />
                </div>
                <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-3xl text-white font-semibold">
                  Sylhet
                </div>
              </div>
            </button>
            <button
              className="transition duration-500 ease-in-out transform hover:translate-y-0 hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex">
                <div>
                  <Image className="rounded-lg" alt="Vercel logo" src={img} />
                  <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-3xl text-white font-semibold">
                    Jalan Kasah
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImageSection
