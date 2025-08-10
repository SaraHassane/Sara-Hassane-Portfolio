'use client';

import FadeInView from '@/components/FadeInView';
import { PinContainer } from '@/components/ui/3d-pin';
import Image from 'next/image';
import { MagicButton } from '@/components/ui/MagicButton';

const Projects = () => {
  const projectItems = [
    {
      title: "Tic Tac Toe",
      description: "Built a Tic Tac Toe game using React, highlighting my skills in components, state handling, and responsive design. Includes Player vs. Player mode, real-time win/draw checks, and a restart option.",
      link: "https://github.com/SaraHassane/Tic-Tac-Toe",
      imageSrc: "/project6.png",
    },
    {
      title: "E-Commerce",
      description: "Full-stack app for auctions. In this project, I learned to set up frameworks, create models, and implement views. The site allows users to create listings, place bids, and manage a watchlist, with admin controls through Django.",
      link: "https://github.com/SaraHassane/An-eBay-like-Auction-Site",
      imageSrc: "/project2.png",
    },
    {
      title: "Social Network Website",
      description: "Social network website built with Django. The project created a social network where users can post, follow others, and like or edit posts, with features like profile pages and pagination.",
      link: "https://github.com/SaraHassane/Social-Network-Website",
      imageSrc: "/project3.png",
    },
    {
      title: "Email Client App",
      description: "Built an email app with HTML, CSS, and JavaScript, using a REST API for email handling. Users can sign up, log in, and manage emails across inbox, sent, and archive mailboxes.",
      link: "https://github.com/SaraHassane/Single-page-Web-Application-Email-Client",
      imageSrc: "/project4.png",
    },


  ];

  return (
    <FadeInView direction="up" delay={180} className="pointer-events-none">
      <section id="projects" className="relative py-10 w-full">

        <div className="xl:w-1/2 px-6 relative text-white mb-8 text-5xl font-stretch-ultra-expanded pl-29 flex justify-baseline pointer-events-none">
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
                <div className="w-[15rem] sm:w-[21rem]  h-[15rem] rounded-2xl bg-gradient-to-br from-purple-800 to-black p-5 flex flex-col justify-between border border-white/10 hover:border-white/20 transition duration-300 pointer-events-auto">
                  <div>
                    <Image
                      src={project.imageSrc}
                      alt={project.title}
                      width={400}
                      height={180}
                      className="rounded-lg w-full h-[11rem] object-cover mb-4"
                    />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
        <div className='flex justify-center mt-15 mb-[-17] pointer-events-auto'>
          <a href="/#projects">
            <MagicButton
              title="Go Back"
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
