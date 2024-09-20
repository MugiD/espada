"use client"

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconUserScan,
  IconBrandX,
  IconExchange,
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
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Profile",
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
