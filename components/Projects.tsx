'use client';
import FadeInView from './FadeInView';
import { PinContainer } from './ui/3d-pin';
import Image from 'next/image';
import { MagicButton } from './ui/MagicButton';

const Projects = () => {
  const projectItems = [
    {
      title: "Almasy Couture Landing Page",
      description: "A modern landing page design for Almasy Couture, crafted in Figma. The layout blends minimal elegance with striking fashion imagery to reflect the brand’s luxury identity. Smooth scroll navigation ensures a refined, seamless browsing experience.",
      link: "https://www.figma.com/design/vjLSZJrUP3P1cpfH4Ac1BD/ALMASY-COUTURE-LANDING-PAGE?node-id=1-59&t=2jWbsWDClwZCINmd-1",
      imageSrc: "/project7.png",
    },
    {
      title: "Almasy Bakes",
      description: "This bakery recipes website, built with Django and styled using HTML, CSS, and JavaScript, allows users to explore recipes and share feedback, while admins manage content through the Django admin panel.",
      link: "https://github.com/SaraHassane/Almasy-Bakes",
      imageSrc: "/project1.png",
    },
    {
      title: "Almasy Cookies",
      description: "ALMASY COOKIES is a Figma prototype for a cookie business, featuring a simplified homepage and essential menus for a user-friendly experience.",
      link: "https://www.figma.com/proto/VUUIfFayhV1X8CeLK3Lvo8/ALMASY-COOKIES?node-id=11-9&t=BRmUuVFQzEIOSq6Z-1&starting-point-node-id=11%3A9",
      imageSrc: "/project5.png",
    },

    

  ];

  return (
    <FadeInView direction="up" delay={180} className="pointer-events-none">
      <section id="projects" className="relative py-10 w-full scroll-mt-20">
        <div className="h-[1px] w-[95%]  mt-3 mb-10 bg-[linear-gradient(to_right,transparent,_#c084fc,_#22d3ee,_transparent)]" />

        <div className="xl:w-1/2 px-6 relative text-white mb-8 text-5xl font-stretch-ultra-expanded flex justify-baseline pointer-events-none">
          <h1>Projects</h1>
        </div>


        <div className="flex flex-col items-center mx-[10px] px-4  ">
          {projectItems.map((project, index) => (
            <div
              key={index}
              className="flex flex-col-reverse lg:flex-row gap-12 items-center justify-center w-full max-w-5xl flex-wrap md:flex-nowrap"
            >
              {/* LEFT: Title + Description */}
              <div className="text-white w-full md:w-1/2 text-center md:text-left px-2 flex flex-col justify-center items-center md:items-start pointer-events-none">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-base text-white/70 mb-8">{project.description}</p>
              </div>

              {/* RIGHT: Project Card */}
              <PinContainer
                title={project.title}
                href={project.link}
                containerClassName="custom-container"
              >
                <div className="w-[15rem] sm:w-[21rem] h-[15rem] rounded-2xl bg-gradient-to-br from-purple-800 to-black p-5 flex flex-col justify-between border border-white/10 hover:border-white/20 transition duration-300 pointer-events-auto">
                  <div>
                    <Image
                      src={project.imageSrc}
                      alt={project.title}
                      width={400}
                      height={180}
                      className="rounded-lg w-full h-[11rem] object-cover"
                    />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
        <div className='flex justify-center mt-15 mb-[-17] pointer-events-auto'>
          <a href="/Projects">
            <MagicButton
              title="More Projects"
              icon={""}
              position={""}
            />
          </a>
        </div>

      </section>
    </FadeInView>
  );
};

export default Projects;
