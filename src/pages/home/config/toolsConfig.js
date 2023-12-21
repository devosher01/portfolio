import * as SiIcons from 'react-icons/si';
import * as DiIcons from "react-icons/di";
import * as Io5Icons from "react-icons/io5";
import * as GiIcons from 'react-icons/gi';


const tools = [
    { name: 'VS Code', color: 'bg-blue-500', textColor: 'text-white', Icon: DiIcons.DiVisualstudio },
    { name: 'Postman', color: 'bg-orange-500', textColor: 'text-white', Icon: SiIcons.SiPostman },
    { name: 'Firebase', color: 'bg-yellow-500', textColor: 'text-black', Icon: DiIcons.DiFirebase },
    { name: 'Docker', color: 'bg-blue-500', textColor: 'text-white', Icon: DiIcons.DiDocker },
    { name: 'Git', color: 'bg-red-500', textColor: 'text-white', Icon: DiIcons.DiGit },
    { name: 'GitHub', color: 'bg-black', textColor: 'text-white', Icon: DiIcons.DiGithubBadge },
    { name: 'Vercel', color: 'bg-black', textColor: 'text-white', Icon: Io5Icons.IoLogoVercel },
    {name: 'TablePlus', color: 'bg-yellow-400', textColor: 'text-black', Icon: GiIcons.GiElephant},
];

export default tools;