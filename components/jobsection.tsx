import { cn } from "../utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";

import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { Badge } from "./ui/badge";
import Image from "next/image";

export default function JobSection() {
  return (
    <BentoGrid className=" max-w-6xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          link={item.link}
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          // className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
  </div>
);
const items = [
  {
    title: "Data Collection Intern - UNPAID",
    description: "Conduct research and data collection on specified topics related to academic resources, study materials, and educational trends.",
    header: <Image src={'/1.png'} alt="hi" width={500} height={500}  className=" flex flex-1 w-full h-full min-h-[6rem] object-cover rounded-md"/>,
    icon: <div className=" space-x-2"><Badge>Intern</Badge><Badge>Marketing</Badge><Badge>Data collection</Badge></div>,
    link: "https://forms.gle/6xfAcm7XimdSrBqi6"
  },
  {
    title: "Graphic Design Interns - UNPAID",
    description: " Designing visual assets for marketing materials, website, and social media. Proficiency in graphic design tools like Adobe Photoshop, Illustrator, Canva, etc.",
    header: <Image src={'/2.png'} alt="hi" width={500} height={500}  className=" flex flex-1 w-full h-full min-h-[6rem] object-cover rounded-md"/>,
    icon: <div className=" space-x-2"><Badge>Intern</Badge><Badge>Graphic</Badge><Badge>Social Media</Badge></div>,
    link: "https://forms.gle/RZHk8NB3apTu5WJp7"
  },
  {
    title: "UI/UX Design Intern - UNPAID",
    description: " Improving user interface and experience, conducting usability testing. Understanding of user-centered design principles, proficiency in UI/UX design tools.",
    header: <Image src={'/3.png'} alt="hi" width={500} height={500}  className=" flex flex-1 w-full h-full min-h-[6rem] object-cover rounded-md"/>,
    icon: <div className=" space-x-2"><Badge>Intern</Badge><Badge>UI/UX</Badge><Badge>Figma</Badge></div>,
    link: "https://forms.gle/VQqyZzNW2Dc3XDKj9"
  },
  {
    title: "Content Creation Intern - UNPAID",
    description:
      "Responsibilities: Writing blog posts, creating study materials, developing educational content. Skills: Excellent writing skills, research abilities, knowledge of educational content creation.",
      header: <Image src={'/4.png'} alt="hi" width={500} height={500}  className=" flex flex-1 w-full h-full min-h-[6rem] object-cover rounded-md"/>,
      icon: <div className=" space-x-2"><Badge>Intern</Badge><Badge>Content Writing</Badge><Badge>Research</Badge></div>,
    link: "https://forms.gle/xquLqcPhAd1E1iij6"
  },
  {
    title: "Marketing Intern - UNPAID",
    description: "Creating and implementing digital marketing campaigns, social media management, content creation, SEO optimization.",
    header: <Image src={'/5.png'} alt="hi" width={500} height={500}  className=" flex flex-1 w-full h-full min-h-[6rem] object-cover rounded-md"/>,
    icon: <div className=" space-x-2"><Badge>Intern</Badge><Badge>Marketing</Badge><Badge>SEO</Badge></div>,
    link: "https://forms.gle/MuoduWGNWedeh4ND7"
  },
  {
    title: "React Developer Intern - UNPAID",
    description: "Developing web applications using React, JavaScript, HTML, CSS. Understanding of React, JavaScript, HTML, CSS, and web development.",
    header: <Image src={'/6.png'} alt="hi" width={500} height={500}  className=" flex flex-1 w-full h-full min-h-[6rem] object-cover rounded-md"/>,
    icon: <div className=" space-x-2"><Badge>Intern</Badge><Badge>ReactJS</Badge><Badge>Web Development</Badge></div>,
    link: "https://forms.gle/KVurxX6yskrDiU6e6"
  },
  // {
  //   title: "The Spirit of Adventure",
  //   description: "Embark on exciting journeys and thrilling discoveries.",
  //   header: <Skeleton />,
  //   icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  //   link: "https://vinucode.in/"
  // },
];
