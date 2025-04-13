import { 
    FaCss3Alt, FaFigma, FaHtml5, 
    FaJs, FaReact, FaPython
} from "react-icons/fa";
import{
    SiDjango
} from "react-icons/si";
import { 
    RiTailwindCssFill 
} from "react-icons/ri";
import { 
    VscGithubInverted 
} from "react-icons/vsc";

import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { JSX } from "react/jsx-runtime";

export interface Skill {
    name: string;
    icon: JSX.Element;
}

export const skills: Skill[] = [
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt />},
    { name: 'JavaScript', icon: <FaJs />},
    { name: 'React', icon: <FaReact /> },
    { name: 'Next.js', icon: <SiNextdotjs />},
    { name: 'TypeScript', icon: <SiTypescript />},
    { name: 'Tailwind', icon: <RiTailwindCssFill />},
    { name: 'Python', icon: <FaPython />},
    { name: 'Django', icon: <SiDjango />},
    { name: 'Git', icon: <VscGithubInverted />},   
    { name: 'Figma', icon: <FaFigma />},
];
