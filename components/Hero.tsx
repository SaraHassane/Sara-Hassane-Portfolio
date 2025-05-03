import Image from 'next/image'
import TextAnimation from './TextAnimation'
import { MagicButton } from './ui/MagicButton'
import FadeInView from './FadeInView';

const Hero = () => {
  return (
    <section id='home' className='scroll-mt-20'>
    <div className='h-[calc(100vh-90px)] flex flex-col justify-center '>
      {/* MAIN DIV */}
      <FadeInView direction="up" delay={200} className="pointer-events-none">


        {/* TEXT */}
        <div className="relative flex flex-col-reverse  md:flex-row items-center justify-between pointer-events-none pt-[100px]">

          <div className=" xl:w-1/2 px-6">
            <h1 className="text-white mb-4 text-5xl font-bold ">Hi, I'm
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600'> Sara Hassane</span>
            </h1>

            {/* TEXT ANIMATION */}
            <div className='xl:pl-4 xl:pr-2 xl:ml-25 text-purple-950 bg-gradient-to-r from-cyan-500 to-purple-600 text-3xl font-extrabold inline-block'>
              <TextAnimation />
            </div>

            {/* PARAGRAPH INTRODUCTION*/}
            <div className='xl:pl-7 xl:pt-4 xl:ml-25 text-white text-small font-medium max-w-xl flex flex-col gap-4'>
              <p>Building Dynamic, Visually Engaging, and User-Friendly Websites.
                My expertise extends to both developing and designing websites,
                reflecting my commitment to delivering seamless digital experiences.</p>
              {/* BUTTONS */}
              <div className="pointer-events-auto flex gap-4 ">
                <a href="#contact">
                  <MagicButton
                    title="Contact Me"
                    icon={""}
                    position={""}
                  />
                </a>
                <a href="/Sara Hassane's Resume.pdf" download>
                  <MagicButton
                    title="Download CV"
                    icon={""}
                    position={""}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* IMAGE ON THE RIGHT */}
          <div className="w-1/2  flex justify-center">
            <Image
              src="/SaraHassane.jpeg"
              alt="Developer Picture"
              width={400}
              height={400}
              className="rounded-full mb-4 sm:mb-10 lg:mb-0 object-cover border-1 border-cyan-500 backdrop-blur-lg shadow-[0_0_15px_rgba(124,38,203,0.5)]"
              />
          </div>

        </div>
      </FadeInView>
    </div>
    </section>

  )
}

export default Hero