"use client";
import React, { createContext, useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { MenuItem, SubMenuItem } from "./CollapseableNav";

const SidebarContext = createContext();

const Sidebar = () => {
  const [state, setState] = useState({
    sidebarOpened: false,
    isSidebarOpenedMobile: false,
    isProfileOpen: false,
    activeSidebar: "dashboard",
    isPanelOpened: false,
  });

  const updateState = (newState) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };

  return (
    <SidebarContext.Provider value={{ state, updateState }}>
      <div>
        <IconSidebar />
        <MenuSidebar />
      </div>
    </SidebarContext.Provider>
  );
};

const IconSidebar = () => {
  const { state, updateState } = useContext(SidebarContext);
  const { isSidebarOpenedMobile, sidebarOpened, isProfileOpen, activeSidebar } =
    state;

  const sidebarIcons = [
    { icon: "ph:gauge-duotone", name: "dashboard" },
    { icon: "ph:grid-four-duotone", name: "accounting" },
    { icon: "ph:briefcase-duotone", name: "business" },
    { icon: "ph:notification-duotone", name: "misc" },
    { icon: "ph:sticker-duotone", name: "documentation" },
  ];

  return (
    <nav
      className={`fixed start-0 top-0 z-50 w-20 overflow-visible border border-muted-200 bg-gray-900 transition-all duration-300 dark:border-muted-800 dark:bg-muted-950 lg:translate-x-0 ${
        isSidebarOpenedMobile ? "translate-x-0" : "-translate-x-full"
      } h-full`}
    >
      <div className="relative h-full">
        <ul
        // className={`${sidebarOpened ? "" : "my-[7px]"}`}
        >
          <li className="relative flex h-[65px] w-full items-center justify-center mb-2">
            <Link
              href="/"
              className="relative flex h-8 w-8 items-center justify-center text-sm no-underline transition-all duration-100 ease-linear"
            >
              <div className="mt-[-5px] h-7 w-7 text-primary-500 transition-opacity duration-300 hover:opacity-80">
                Logo
              </div>
            </Link>
          </li>

          {sidebarIcons.map((item) => (
            <SidebarIcon key={item.name} icon={item.icon} name={item.name} />
          ))}
        </ul>

        {/* Profile section remains unchanged */}
      </div>
    </nav>
  );
};

const SidebarIcon = ({ icon, name }) => {
  const { state, updateState } = useContext(SidebarContext);
  const { sidebarOpened, activeSidebar } = state;

  const openSidebar = (name) => {
    updateState({
      sidebarOpened: true,
      isSidebarOpenedMobile: true, // Add this line to open on mobile
      activeSidebar: name,
      isPanelOpened: false,
    });
  };

  return (
    <li
      className={`side-icon group/side-icon relative flex h-[65px] w-full cursor-pointer items-center justify-center ${
        activeSidebar === name ? "is-active" : ""
      }`}
      onClick={() => openSidebar(name)}
    >
      <div
        className={`side-icon-inner mask mask-blob flex h-[44px] w-[44px] items-center justify-center transition-colors duration-300 ${
          activeSidebar === name
            ? "bg-primary-500/10 dark:bg-primary-500/20"
            : ""
        }`}
      >
        <Icon
          icon={icon}
          className={`relative text-2xl text-muted-400 transition-colors duration-300 ${
            activeSidebar === name
              ? "text-primary-500"
              : "group-hover/side-icon:text-muted-500"
          }`}
        />
      </div>
    </li>
  );
};

const MenuSidebar = () => {
  const { state, updateState } = useContext(SidebarContext);
  const { isSidebarOpenedMobile, sidebarOpened, activeSidebar } = state;

  const menuItems = [
    { title: "Dashboard", path: "dashboard", icon: "ph:gauge-duotone" },
    { title: "Accounting", path: "accounting", icon: "ph:grid-four-duotone" },
    { title: "Business", path: "business", icon: "ph:briefcase-duotone" },
    { title: "Misc", path: "misc", icon: "ph:notification-duotone" },
    {
      title: "Documentation",
      path: "documentation",
      icon: "ph:sticker-duotone",
    },
  ];

  return (
    <nav
      className={`fixed start-0 top-0 z-[38] h-full w-[calc(100%-80px)] overflow-hidden border-0 border-muted-200 bg-gray-800 transition-all duration-300 dark:border-muted-800 dark:bg-muted-950 md:w-[250px] lg:start-20 ${
        sidebarOpened
          ? "is-sidebar-translated translate-x-0 border-r"
          : " -translate-x-[130%]"
      } ${
        isSidebarOpenedMobile
          ? "is-menu-sidebar-translated-mobile start-20 translate-x-0"
          : " -translate-x-[130%]"
      }`}
    >
      <div className="relative h-full w-full">
        <div className="menu-sidebar-inner relative w-full pb-20">
          <ul className="relative mt-[0.84rem] flex w-full flex-col">
            <li className="relative my-2 flex h-[60px] w-full items-center px-6">
              <button
                className="group relative w-full items-center justify-start"
                onClick={() =>
                  updateState({
                    sidebarOpened: false,
                    isSidebarOpenedMobile: false,
                  })
                }
              >
                <div className="flex w-full flex-col">
                  <p className="relative w-full text-start text-sm font-medium text-muted-700 transition-colors duration-300 group-hover:text-primary-500 dark:text-muted-400 dark:group-hover:text-primary-500">
                    Collapse Menu
                  </p>
                </div>
              </button>
            </li>

            {menuItems.map((item) => (
              <MenuItem
                key={item.path}
                title={item.title}
                path={item.path}
                icon={item.icon}
                isActive={activeSidebar === item.path}
                onClick={() =>
                  updateState({
                    activeSidebar: item.path,
                    sidebarOpened: true,
                    isSidebarOpenedMobile: true,
                  })
                }
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;

const navData = [
  {
    title: "Dashboard",
    icon: "ph:gauge-duotone",
    href: "/dashboard",
    //type:link | modal ,
    type: "modal",
    children: [],
  },
  {
    title: "Accounting",
    icon: "ph:grid-four-duotone",
    href: "/accounting",
    type: "link",
    children: [
      {
        title: "Invoices",
        href: "/accounting/invoices",
        type: "link",
      },
      {
        title: "Expenses",
        href: "/accounting/expenses",
        type: "link",
      },
      {
        title: "Reports",
        href: "/accounting/reports",
        type: "link",
      },
    ],
  },
  {
    title: "Business",
    icon: "ph:briefcase-duotone",
    href: "/business",
    type: "link",
    children: [
      {
        title: "Customers",
        icon: "ph:briefcase-duotone",
        href: "/business/customers",
        type: "link",
      },
      {
        title: "Projects",
        icon: "ph:briefcase-duotone",
        href: "/business/projects",
        type: "link",
      },
      {
        title: "Tasks",
        icon: "ph:briefcase-duotone",
        href: "/business/tasks",
        type: "link",
      },
    ],
  },
  {
    title: "Misc",
    icon: "ph:notification-duotone",
    href: "/misc",
    type: "link",
    children: [],
  },
  {
    title: "Documentation",
    icon: "ph:sticker-duotone",
    href: "/documentation",
    type: "link",
    children: [
      {
        title: "Getting Started",
        href: "/documentation/getting-started",
        type: "link",
      },
      {
        title: "Components",
        href: "/documentation/components",
        type: "link",
        children: [
          {
            title: "Button",
            href: "/documentation/components/button",
            type: "link",
          },
          {
            title: "Input",
            href: "/documentation/components/input",
            type: "link",
          },
          {
            title: "CollapseableNav",
            href: "/documentation/components/collapseable-nav",
            type: "link",
          },
          {
            title: "Sidebar",
            href: "/documentation/components/sidebar",
            type: "link",
          },
        ],
      },
      {
        title: "API Reference",
        href: "/documentation/api-reference",
        type: "link",
      },
    ],
  },
];
