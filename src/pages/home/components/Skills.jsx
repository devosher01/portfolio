import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiFlutter, SiDart, SiGo, SiPostman } from 'react-icons/si';

const SkillItem = ({ skill, color, textColor, Icon }) => (
    <div className={`flex items-center gap-2 p-2 rounded-full m-2 ${color}`}>
        <Icon className={`${textColor}`} />
        <span className={`${textColor}`}>{skill}</span>
    </div>
);

const SkillsMarquee = ({ skills }) => (
    <Marquee direction="left" speed={20}>
        <div className="mb-2 h-12 flex">
            {skills.map((skill, index) => (
                <SkillItem key={index} skill={skill.name} color={skill.color} textColor={skill.textColor} Icon={skill.Icon} />
            ))}
        </div>
    </Marquee>
);

const Skills = () => {
    const skills = [
        { name: 'HTML', color: 'bg-red-500', textColor: 'text-white', Icon: FaHtml5 },
        { name: 'CSS', color: 'bg-blue-500', textColor: 'text-white', Icon: FaCss3 },
        { name: 'JavaScript', color: 'bg-yellow-300', textColor: 'text-black', Icon: FaJs },
        { name: 'React', color: 'bg-blue-700', textColor: 'text-white', Icon: FaReact },
        { name: 'Node.js', color: 'bg-green-600', textColor: 'text-white', Icon: FaNodeJs },
        { name: 'Tailwind', color: 'bg-indigo-500', textColor: 'text-white', Icon: SiTailwindcss },
        { name: 'Flutter', color: 'bg-blue-400', textColor: 'text-white', Icon: SiFlutter },
        { name: 'Dart', color: 'bg-blue-600', textColor: 'text-white', Icon: SiDart },
        { name: 'Rest API', color: 'bg-red-600', textColor: 'text-white', Icon: SiPostman },
        { name: 'Golang', color: 'bg-blue-300', textColor: 'text-black', Icon: SiGo },
    ];

    return (
        <div className="sm:w-[800px] w-full h-auto max-w-full bg-bg-container flex flex-col items-center justify-center rounded-[12px] p-4">
            <div className="flex items-center mb-2 w-full">
                <svg viewBox="0 0 256 256" className="h-4 w-4 mr-2" fill="#45A29E">
                    <path d="M235.33,116.72,139.28,20.66a16,16,0,0,0-22.56,0l-96,96.06a16,16,0,0,0,0,22.56l96.05,96.06h0a16,16,0,0,0,22.56,0l96.05-96.06a16,16,0,0,0,0-22.56ZM128,224h0L32,128,128,32,224,128Z"></path>
                </svg>
                <h2 className="text-white">Skills</h2>
            </div>
            <div className="flex flex-col items-center overflow-hidden w-full">
                <SkillsMarquee skills={skills} />
            </div>
        </div>
    );
};

export default Skills;