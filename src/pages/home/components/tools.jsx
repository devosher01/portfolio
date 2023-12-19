import React from 'react';
import Marquee from 'react-fast-marquee';
import tools from '../config/toolsConfig';

const ToolItem = ({ tool, color, textColor, Icon }) => (
    <div className={`flex items-center gap-2 p-2 rounded-full m-2 ${color}`}>
        <Icon className={`${textColor}`} />
        <span className={`${textColor}`}>{tool}</span>
    </div>
);

const ToolsMarquee = ({ tools }) => (
    <Marquee direction="right" speed={20}>
        <div className="mb-2 h-12 flex justify-evenly">
            {tools.map((tool, index) => (
                <ToolItem key={index} tool={tool.name} color={tool.color} textColor={tool.textColor} Icon={tool.Icon} />
            ))}
        </div>
    </Marquee>
);

const ToolsIcon = () => (
    <svg viewBox="0 0 256 256" className="h-4 w-4 mr-2" fill="#45A29E">
        <path d="M235.33,116.72,139.28,20.66a16,16,0,0,0-22.56,0l-96,96.06a16,16,0,0,0,0,22.56l96.05,96.06h0a16,16,0,0,0,22.56,0l96.05-96.06a16,16,0,0,0,0-22.56ZM128,224h0L32,128,128,32,224,128Z"></path>
    </svg>
);

const Tools_Container = () => (
    <div className="sm:w-[800px] w-full h-auto max-w-full bg-bg-container flex flex-col items-center justify-center rounded-[12px] p-4">
        <div className="flex items-center mb-2 w-full">
            <ToolsIcon />
            <h2 className="text-white">Tools</h2>
        </div>
        <div className="flex flex-col items-center overflow-hidden w-full">
            <ToolsMarquee tools={tools} />
        </div>
    </div>
);

export default Tools_Container;