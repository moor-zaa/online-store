import { Facebook, Github, Linkedin, Slack, Youtube } from "lucide-react";

const className = "w-5 h-5";

export const SOCIAL_MEDIA = [
  {
    title: "Youtube",
    href: "/",
    icon: <Youtube className={className} />,
  },
  {
    title: "Github",
    href: "/",
    icon: <Github className={className} />,
  },
  {
    title: "Linkedin",
    href: "/",
    icon: <Linkedin className={className} />,
  },
  {
    title: "Facebook",
    href: "/",
    icon: <Facebook className={className} />,
  },
  {
    title: "Slack",
    href: "/",
    icon: <Slack className={className} />,
  },
];
