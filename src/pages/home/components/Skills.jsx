import React from 'react';
import Marquee from 'react-fast-marquee';
import skills from '../config/skillsConfig';

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

const SkillsIcon = () => (
    <svg viewBox="0 0 256 256" className="h-4 w-4 mr-2" fill="#45A29E">
        <path d="M235.33,116.72,139.28,20.66a16,16,0,0,0-22.56,0l-96,96.06a16,16,0,0,0,0,22.56l96.05,96.06h0a16,16,0,0,0,22.56,0l96.05-96.06a16,16,0,0,0,0-22.56ZM128,224h0L32,128,128,32,224,128Z"></path>
    </svg>
);

const Skills_Container = () => (
    <div className="sm:w-[800px] w-full h-auto max-w-full bg-bg-container flex flex-col items-center justify-center rounded-[12px] p-4">
        <div className="flex items-center mb-2 w-full">
            <SkillsIcon />
            <h2 className="text-white">Skills</h2>
        </div>
        <div className="flex flex-col items-center overflow-hidden w-full">
            <SkillsMarquee skills={skills} />
        </div>
    </div>
);

export default Skills_Container;