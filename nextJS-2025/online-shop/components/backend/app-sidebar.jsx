"use client"

import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  LayoutDashboard,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "./nav-main";
import { NavProjects } from "./nav-projects";
import { NavUser } from "./nav-user";
import { TeamSwitcher } from "./team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavSingle } from "./nav-single";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";



// This is sample data.
const data = {
  user: {
    name: "Jewel",
    email: "jeweltutin@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Shop Admin",
      logo: GalleryVerticalEnd,
      plan: "Manager",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  manus: [
    {
      name: "Dashboard",
      url: "/dx-admin/dashboard",
      icon: LayoutDashboard
    }
  ],
  logOut: [
    {
      name: "Log Out",
      url: "/dx-admin/dashboard",
      icon: LayoutDashboard
    }
  ],
  navMain: [,
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "/history",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Dashboard",
      url: "/dx-admin/dashboard",
      icon: LayoutDashboard
    },
    {
      name: "Design Engineering",
      url: "/test",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const jwt = sessionStorage.getItem("jwt");
    const userData = JSON.parse(sessionStorage.getItem("user"));

    if (jwt) {
      setIsLoggedIn(true);
      setToken(jwt);
      setUser(userData);
    }
  }, []);

  const onSignOut = () => {
    sessionStorage.clear();
    setIsLoggedIn(false);
    setUser(null);
    setToken(null);
    router.push("/sign-in");
  };

  return (
    <Sidebar collapsible="icon" {...props} className={"text-white"}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavSingle singles={data.manus} />
        <NavMain items={data.navMain} />
        {/* <NavSingle singles={data.logOut} /> */}
        <NavSingle
          singles={data.logOut.map((item) => ({
            ...item,
            onClick: item.name === "Log Out" ? onSignOut : item.onClick, // Add onClick for Log Out
          }))}
        />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
