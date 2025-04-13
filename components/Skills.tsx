import { skills } from "@/data";
import { Button } from "./ui/MovingBorder";
import FadeInView from "./FadeInView";

const Skills = () => {
  return (
    <FadeInView direction="up" delay={200} className="pointer-events-none">
      <section
        id="skills"
        className="relative pt-21 w-full pointer-events-none scroll-mt-20"
      >
        <div className="">
          <div className="h-[1px] w-[98%] mb-10 bg-[linear-gradient(to_right,transparent,_#c084fc,_#22d3ee,_transparent)]" />
          <div className="xl:w-1/2 px-6 relative text-white mb-8 text-5xl font-stretch-ultra-expanded flex justify-baseline pointer-events-none">
            <h1>Skills</h1>
          </div>

          <div className="flex flex-wrap gap-5 p-6 w-full sm:justify-center pointer-events-none">
            <Button
              className="justify-items-center flex gap-5 p-6 flex-wrap"
              borderRadius="1.75rem"
              duration={10000}
            >
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="min-w-[80px] max-w-[100px] flex flex-col items-center text-center"
                >
                  <div className="text-4xl mb-2">{skill.icon}</div>
                  <h1 className="text-base font-bold">{skill.name}</h1>
                </div>
              ))}
            </Button>
          </div>
        </div>
      </section>
    </FadeInView>
  );
};

export default Skills;