"use client"

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconUserScan,
  IconBrandGithub,
  IconRobot,
  IconHome,
  IconBinoculars,
  IconUsers,
  IconPlus,
} from "@tabler/icons-react";


export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Teams",
      icon: (
        <IconUsers className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/teams",
    },
    {
      title: "Hackathons",
      icon: (
        <IconBinoculars className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/hacks",
    },
    {
      title: "Create Team",
      icon: (
        <IconPlus className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/create-team",
    },
    {
      title: "AI",
      icon: (
        <IconRobot className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/ai",
    },

    {
      title: "Github",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/MugiD/espada",
    },
    {
      title: "Dashboard",
      icon: (
        <IconUserScan className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/dashboard",
    },
  ];
  return (
    <div className="fixed top-[22rem] flex items-center justify-center h-[35rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
