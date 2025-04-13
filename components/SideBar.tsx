import Link from 'next/link'
import Image from 'next/image'
import { TracingBeam } from './ui/TracingBeam'
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

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 w-[75px] h-screen flex-row items-center justify-start z-50 pointer-events-none hidden sm:hidden lg:flex">


            <div className='flex flex-col justify-between items-center h-full w-full py-5'>
                <div className=" pointer-events-auto">
                    <Link href="/">
                        <Image src="/logo2.png" width={45} height={30} alt="logo" />
                    </Link>
                </div>


                <div className="flex flex-col pointer-events-auto gap-2">
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
            </div>

            <TracingBeam />

        </div>
    )
}

export default SideBar
