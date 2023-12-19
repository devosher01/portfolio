import React from "react";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

const SocialLink = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="bg-[#1A1A1A] rounded-14 p-2">
        {children}
    </a>
);

const StatusIndicator = () => (
    <div className="p-2 border-[1px] border-[rgb(0,204,150)] bg-[rgb(26,26,26)] rounded-[12px] h-full opacity-100 flex items-center">
        <div className="bg-[rgb(0,204,150)] rounded-full h-2 w-2 mr-2"></div>
        <div className="flex flex-col justify-start items-start text-[rgb(230,230,230)] opacity-100">
            <p className="font-sans text-[14px] font-light text-[rgb(230,230,230)]">Available for work</p>
        </div>
    </div>
);

const Header = () => {
    const username = "username";
    const iconColor = "rgb(172, 153, 255)";

    return (
        <div className="flex justify-around items-center bg-[rgb(15,15,15)] rounded-[30px] text-white shadow-lg p-10 w-[800px] h-[80px] max-w-full opacity-100">
            <div className="p-4 relative">
                <div className="opacity-100">
                    <div>
                        <p className="text-name font-bold  font-bai-jamjuree text-2xl">Oscar Hernandez</p>
                    </div>
                    <div>
                        <p className="text-gray-600">Fullstack Developer</p>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="opacity-100">
                    <div className="contents" tabIndex="0">
                        <StatusIndicator />
                    </div>
                </div>
            </div>
            <div className="p-4 flex space-x-4">
                <SocialLink href={`https://github.com/${username}`}>
                    <GithubLogo size={24} color={iconColor} />
                </SocialLink>
                <SocialLink href={`https://linkedin.com/in/${username}`}>
                    <LinkedinLogo size={24} color={iconColor} />
                </SocialLink>
            </div>      
        </div>
    );
};

export default Header;