import { Icon } from '@iconify/react';

const socialLinks = [
  {
    href: "mailto:sarahasssane@gmail.com",
    label: 'Email',
    icon: 'ic:baseline-email'
  },
  {
    href: 'https://github.com/SaraHassane',
    label: 'GitHub',
    icon: 'mdi:github'
  },
  {
    href: 'https://www.linkedin.com/in/sarahassane/',
    label: 'LinkedIn',
    icon: 'ri:linkedin-fill'
  }
];

const Footer = () => {
  return (
    <footer className="text-center overflow-hidden py-8 w-full ">
      <div className="flex justify-center mb-8 pointer-events-auto gap-2 lg:hidden">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            aria-label={link.label}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="relative flex justify-center items-center w-10 h-10 border bg-primary-300/10 border-cyan-200/20 text-white rounded-full rotate-45 group-hover:rotate-0 transition-transform">
              <Icon
                icon={link.icon}
                className="text-xl text-cyan-200/90 group-hover:scale-110 transition-transform"
              />
            </div>
          </a>
        ))}
      </div>

      <div className="mx-auto w-screen relative overflow-y-hidden pointer-events-none">
        <div className="h-[1px] w-[95%] bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>

        <div className="text-white text-sm flex justify-center font-extralight mt-6">
          © 2025 Sara Hassane. All rights reserved
        </div>

      </div>
    </footer>



  )
}

export default Footer