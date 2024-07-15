"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { BaseButtonIcon, BaseTag } from "@shuriken-ui/react";

const SidebarContext = createContext();
const Sidebar = ({ navData, showGroupOnly = false }) => {
  const [state, setState] = useState({
    activeGroup: null,
    activeModal: null,
    isGroupMenuOpen: showGroupOnly,
    activeItem: null,
  });

  const updateState = (newState) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };

  return (
    <SidebarContext.Provider value={{ state, updateState }}>
      <div className="flex">
        {!showGroupOnly && <IconSidebar navData={navData} />}
        <GroupMenu navData={navData} showGroupOnly={showGroupOnly} />
        {state.activeModal && <Modal item={state.activeModal} />}
      </div>
    </SidebarContext.Provider>
  );
};

const IconSidebar = ({ navData }) => {
  const { state, updateState } = useContext(SidebarContext);

  const handleIconClick = (item) => {
    if (item.type === "modal") {
      updateState({
        activeModal: item,
        activeGroup: null,
        isGroupMenuOpen: false,
      });
    } else if (!item.href || (item.children && item.children.length > 0)) {
      updateState({
        activeGroup: item,
        activeModal: null,
        isGroupMenuOpen: true,
      });
    } else {
      // Handle direct link here if needed
    }
  };

  return (
    <nav className="w-20 z-50 bg-gray-800 h-screen">
      <ul className="flex flex-col justify-center items-center">
        {navData.map((item) => (
          <li key={item.title} className="p-4">
            <BaseButtonIcon
              size="lg"
              rounded="lg"
              onClick={() => handleIconClick(item)}
            >
              <Icon icon={item.icon} className="text-2xl" />
            </BaseButtonIcon>

            {/* <button
              onClick={() => handleIconClick(item)}
              className={`text-white hover:text-gray-300 ${
                state.activeGroup === item ? "bg-gray-700" : ""
              }`}
            >
              <Icon icon={item.icon} className="text-2xl" />
            </button> */}
          </li>
        ))}
      </ul>
    </nav>
  );
};

const GroupMenu = ({ navData, showGroupOnly }) => {
  const { state, updateState } = useContext(SidebarContext);
  const { activeGroup, isGroupMenuOpen } = state;
  const [isRendered, setIsRendered] = useState(showGroupOnly);
  const [isVisible, setIsVisible] = useState(showGroupOnly);

  useEffect(() => {
    if (!showGroupOnly && activeGroup && isGroupMenuOpen) {
      setIsVisible(true);
      setTimeout(() => setIsRendered(true), 50);
    } else if (!showGroupOnly) {
      setIsRendered(false);
      // Delay hiding the component until after the transition
      setTimeout(() => setIsVisible(false), 300); // 300ms matches the transition duration
    }
  }, [activeGroup, isGroupMenuOpen, showGroupOnly]);

  if (!activeGroup && !isVisible && !showGroupOnly) return null;

  return (
    <nav
      className={`z-10 bg-gray-700 h-screen overflow-y-auto transition-all duration-300 ease-in-out ${
        isRendered || showGroupOnly
          ? "translate-x-0 w-64"
          : "-translate-x-full w-0"
      }`}
    >
      <div className="flex justify-between items-center p-4">
        {!showGroupOnly && (
          <>
            <h2 className="font-bold text-lg text-white">
              {activeGroup?.title}
            </h2>
            <button
              onClick={() => updateState({ isGroupMenuOpen: false })}
              className="text-gray-300 hover:text-white"
            >
              <Icon icon="ph:x" className="text-xl" />
            </button>
          </>
        )}
      </div>
      <ul className="p-4">
        {showGroupOnly
          ? navData.map((group) => (
              <AccordionGroup key={group.title} group={group} />
            ))
          : activeGroup?.children.map((item) => (
              <MenuItemBase key={item.title} item={item} />
            ))}
      </ul>
    </nav>
  );
};

const AccordionGroup = ({ group }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-2 text-white hover:bg-gray-600 flex justify-between items-center"
      >
        {group.title}
        {group.children && group.children.length > 0 && (
          <Icon
            icon={isOpen ? "ph:caret-up" : "ph:caret-down"}
            className="text-xl"
          />
        )}
      </button>
      {isOpen && group.children && group.children.length > 0 && (
        <ul className=" nested-children">
          {group.children.map((child) => (
            <MenuItemBase key={child.title} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

const MenuItemBase = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { state, updateState } = useContext(SidebarContext);

  const handleClick = () => {
    if (item.type === "modal") {
      updateState({ activeModal: item, activeItem: item });
    } else if (item.children && item.children.length > 0) {
      setIsOpen(!isOpen);
    } else {
      updateState({ activeItem: item });
    }
  };

  const isActive = state.activeItem === item;

  if (item.href) {
    return (
      <Link
        href={item.href}
        className={`flex items-center p-2 text-white hover:bg-gray-600 ${
          isActive
            ? "active-item border-l-2 border-primary-400 bg-gradient-to-r from-primary-300/25 to-transparent"
            : ""
        }`}
        onClick={() => updateState({ activeItem: item })}
      >
        <li className="w-full flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {item.icon && <Icon icon={item.icon} className="text-xl" />}
            <span>{item.title}</span>
          </div>
          <BaseTag rounded="full" variant="solid" color="muted">
            20
          </BaseTag>
        </li>
      </Link>
    );
  }

  return (
    <li className={`nested-item ${isActive ? "active-item" : ""}`}>
      <button
        onClick={handleClick}
        className="w-full text-left p-2 text-white hover:bg-gray-600 flex justify-between items-center"
      >
        <div className="flex items-center gap-2">
          {item.icon && <Icon icon={item.icon} className="text-xl" />}
          {item.title}
        </div>
        {item.children && item.children.length > 0 && (
          <Icon
            icon={isOpen ? "ph:caret-up" : "ph:caret-down"}
            className="text-xl"
          />
        )}
      </button>
      {item.children && item.children.length > 0 && isOpen && (
        <ul className="nested-children">
          {item.children.map((child) => (
            <MenuItemBase key={child.title} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

const Modal = ({ item }) => {
  const { updateState } = useContext(SidebarContext);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">{item.title}</h2>
        <p>Modal content for {item.title}</p>
        <button
          onClick={() => updateState({ activeModal: null })}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
