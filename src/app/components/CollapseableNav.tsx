"use client";
import Image from "next/image";
import React, { FC, useRef } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Icon, IconifyIcon } from "@iconify/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const CollapseableNav = () => {
  const [sidebarOpened, setSidebarOpened] = React.useState(true);
  const [isSidebarOpenedMobile, setIsSidebarOpenedMobile] =
    React.useState(false);
  const [active, setActive] = React.useState("");

  function collapseSidebarToggle() {
    setSidebarOpened(!sidebarOpened);
    setActive("");
  }
  return (
    <div
      className={`fixed start-0 top-0 z-[38] h-full w-[280px] overflow-hidden bg-primary-800 transition-all duration-300 ${
        sidebarOpened ? " lg:w-[280px]" : "lg:w-20"
      }  ${
        isSidebarOpenedMobile
          ? "is-translated-mobile translate-x-0 "
          : " -translate-x-[101%] lg:translate-x-0 "
      }`}
    >
      <div className="absolute inset-0 z-[1] block overflow-hidden opacity-20">
        <Image
          src="/img/sidebar-bg.webp"
          className="h-full w-full object-cover object-center"
          width={280}
          height={800}
          alt="sidebar background"
        />
      </div>
      <div className="relative z-[2] flex h-full flex-col">
        <div className="flex h-16 min-h-[64px] items-center justify-between border-b border-primary-700 px-6">
          {/* <LogoText
            className={`max-w-[110px] text-white ${
              sidebarOpened ? "" : "lg:hidden"
            }`}
          /> */}
          {/* logo text  */}
          <span className="text-white text-2xl font-bold">LOGO</span>

          <button
            type="button"
            className={`mask mask-blob hidden h-10 w-10 cursor-pointer items-center justify-center transition-all duration-300 hover:bg-primary-700 lg:flex ${
              sidebarOpened ? "" : "rotate-180"
            } `}
            onClick={collapseSidebarToggle}
          >
            <BsArrowLeft className="h-4 w-4 text-muted-100" />
          </button>
          <button
            type="button"
            className="flex h-10 w-10 cursor-pointer items-center justify-center transition-transform duration-300 lg:hidden"
            onClick={() => setIsSidebarOpenedMobile(false)}
          >
            <BsArrowLeft className="h-4 w-4 text-muted-100" />
          </button>
        </div>
        <div className="slimscroll flex-grow overflow-y-auto overflow-x-hidden py-3">
          <nav>
            <ul className="m-0 list-none p-0">
              <MenuItem
                title="Dashboards"
                icon="ph:gauge-duotone"
                sidebarOpened={sidebarOpened}
                activeSidebarMenu={active}
                setActive={setActive}
                setSidebarOpened={setSidebarOpened}
              >
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Finance"
                  href="/dashboard-finance"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Projects"
                  href="/dashboard-projects"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Sales"
                  href="/dashboard-sales"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Accounting"
                  href="/dashboard-accounting"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Cryptocurrency"
                  href="/dashboard-crypto"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Support"
                  href="/dashboard-support"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Hosting"
                  href="/dashboard-hosting"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Ecommerce"
                  href="/dashboard-ecommerce"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="E-Learning"
                  href="/dashboard-elearning"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Domotic"
                  href="/dashboard-domotic"
                />
              </MenuItem>

              <MenuItem
                sidebarOpened={sidebarOpened}
                activeSidebarMenu={active}
                setActive={setActive}
                setSidebarOpened={setSidebarOpened}
                title="Datatables"
                icon="ph:table-duotone"
              >
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Datatable Basic"
                  href="/content-datatable-basic"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Datatable Media"
                  href="/content-datatable"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Datatable Advanced"
                  href="/content-datatable-advanced"
                />
              </MenuItem>

              <MenuItem
                sidebarOpened={sidebarOpened}
                activeSidebarMenu={active}
                setActive={setActive}
                setSidebarOpened={setSidebarOpened}
                title="Widgets"
                icon="ph:circles-four-duotone"
              >
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="UI Widgets"
                  href="/content-widgets-ui"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Data Widgets"
                  href="/content-widgets-data"
                />
              </MenuItem>

              <MenuItem
                sidebarOpened={sidebarOpened}
                activeSidebarMenu={active}
                setActive={setActive}
                setSidebarOpened={setSidebarOpened}
                title="Charts"
                icon="ph:chart-pie-slice-duotone"
              >
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Apex Charts"
                  href="/charts-apex"
                />
              </MenuItem>

              <MenuItem
                sidebarOpened={sidebarOpened}
                activeSidebarMenu={active}
                setActive={setActive}
                setSidebarOpened={setSidebarOpened}
                title="Authentication"
                icon="ph:lock-duotone"
              >
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Signup"
                  href="/auth-signup"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Signup v2"
                  href="/auth-signup-v2"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Signup v3"
                  href="/auth-signup-v3"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Sign In"
                  href="/auth-login"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Sign In v2"
                  href="/auth-login-v2"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Sign In v3"
                  href="/auth-login-v3"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Forgot Password"
                  href="/auth-forgot"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Auth Wizard"
                  href="/auth-wizard"
                />
              </MenuItem>

              <MenuItem
                sidebarOpened={sidebarOpened}
                activeSidebarMenu={active}
                setActive={setActive}
                setSidebarOpened={setSidebarOpened}
                title="Accounting"
                icon="ph:calculator-duotone"
              >
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Bills List"
                  href="/content-bills-list"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Bill Grid"
                  href="/content-bills-grid"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Invoices List"
                  href="/content-invoices-list"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Invoices Grid"
                  href="/content-invoices-grid"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Invoice"
                  href="/content-invoice"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Receipt"
                  href="/content-receipt"
                />
              </MenuItem>

              <MenuItem
                sidebarOpened={sidebarOpened}
                activeSidebarMenu={active}
                setActive={setActive}
                setSidebarOpened={setSidebarOpened}
                title="Social"
                icon="ph:confetti-duotone"
              >
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Social Feed"
                  href="/content-feed"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Posts Feed"
                  href="/content-posts"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Stories Feed"
                  href="/content-stories"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Event Board"
                  href="/content-events"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Profile"
                  href="/content-profile"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Profile Settings"
                  href="/content-settings"
                />
              </MenuItem>

              <MenuItem
                sidebarOpened={sidebarOpened}
                activeSidebarMenu={active}
                setActive={setActive}
                setSidebarOpened={setSidebarOpened}
                title="Forum"
                icon="ph:chat-circle-text-duotone"
              >
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Forum Home"
                  href="/content-forum-index"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Forum Channel"
                  href="/content-forum-channel"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Forum Topic"
                  href="/content-forum-topic"
                />
              </MenuItem>

              <MenuItem
                sidebarOpened={sidebarOpened}
                activeSidebarMenu={active}
                setActive={setActive}
                setSidebarOpened={setSidebarOpened}
                title="Support"
                icon="ph:lifebuoy-duotone"
              >
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Ticket Details"
                  href="/content-support-ticket"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Help Center"
                  href="/content-support-center"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Pricing Plans"
                  href="/content-support-pricing"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Billing Details"
                  href="/content-support-billing"
                />
              </MenuItem>

              <MenuItem
                sidebarOpened={sidebarOpened}
                activeSidebarMenu={active}
                setActive={setActive}
                setSidebarOpened={setSidebarOpened}
                title="Projects"
                icon="ph:projector-screen-chart-duotone"
              >
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Project List"
                  href="/content-project-list"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Project Grid"
                  href="/content-project-grid"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Project Details"
                  href="/content-project"
                />
              </MenuItem>

              <MenuItem
                sidebarOpened={sidebarOpened}
                activeSidebarMenu={active}
                setActive={setActive}
                setSidebarOpened={setSidebarOpened}
                title="CRM"
                icon="ph:crown-duotone"
              >
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Segments"
                  href="/content-crm-segments"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Kanban Board"
                  href="/content-crm-board"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Deal"
                  href="/content-crm-deal"
                />
              </MenuItem>

              <MenuItem
                sidebarOpened={sidebarOpened}
                activeSidebarMenu={active}
                setActive={setActive}
                setSidebarOpened={setSidebarOpened}
                title="Contacts"
                icon="ph:users-four-duotone"
              >
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Contact List"
                  href="/content-contact-list"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Contact Grid"
                  href="/content-contact-grid"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Contact Info"
                  href="/content-contact"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Contact Details"
                  href="/content-contact-details"
                />
              </MenuItem>
              <MenuItem
                sidebarOpened={sidebarOpened}
                activeSidebarMenu={active}
                setActive={setActive}
                setSidebarOpened={setSidebarOpened}
                title="Messages"
                icon="ph:envelope-duotone"
              >
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Chat Messaging"
                  href="/content-messaging"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Message Inbox"
                  href="/content-inbox"
                />
              </MenuItem>

              <MenuItem
                sidebarOpened={sidebarOpened}
                activeSidebarMenu={active}
                setActive={setActive}
                setSidebarOpened={setSidebarOpened}
                title="Forms"
                icon="ph:keyboard-duotone"
              >
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Horizontal Form"
                  href="/content-form-1"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Vertical Form"
                  href="/content-form-2"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Feedback Form"
                  href="/content-form-feedback"
                />
              </MenuItem>

              <MenuItem
                sidebarOpened={sidebarOpened}
                activeSidebarMenu={active}
                setActive={setActive}
                setSidebarOpened={setSidebarOpened}
                title="Empty States"
                icon="ph:selection-duotone"
              >
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Placeholder"
                  href="/content-placeholder"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Error 404"
                  href="/404"
                />
              </MenuItem>

              <MenuItem
                sidebarOpened={sidebarOpened}
                activeSidebarMenu={active}
                setActive={setActive}
                setSidebarOpened={setSidebarOpened}
                title="Documentation"
                icon="ph:sticker-duotone"
              >
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Documentation Hub"
                  href="/documentation"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Quick start guide"
                  href="/documentation/quick-start"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Color system"
                  href="/documentation/color-system"
                />
                <SubMenuItem
                  setSidebarOpened={setSidebarOpened}
                  title="Master layouts"
                  href="/documentation/master-layouts"
                />
              </MenuItem>

              <MenuItem
                sidebarOpened={sidebarOpened}
                activeSidebarMenu={active}
                setActive={setActive}
                setSidebarOpened={setSidebarOpened}
                title="Base components"
                icon="ph:circles-three-duotone"
              >
                {base?.map((item, index) => (
                  <SubMenuItem
                    setSidebarOpened={setSidebarOpened}
                    key={index}
                    title={item.title}
                    href={item.href}
                  />
                ))}
              </MenuItem>

              <MenuItem
                sidebarOpened={sidebarOpened}
                activeSidebarMenu={active}
                setActive={setActive}
                setSidebarOpened={setSidebarOpened}
                title="Form components"
                icon="ph:notification-duotone"
              >
                {form?.map((item, index) => (
                  <SubMenuItem
                    key={index}
                    title={item.title}
                    href={item.href}
                    setSidebarOpened={setSidebarOpened}
                  />
                ))}
              </MenuItem>

              <MenuItem
                sidebarOpened={sidebarOpened}
                activeSidebarMenu={active}
                setActive={setActive}
                setSidebarOpened={setSidebarOpened}
                title="Addons & Plugins"
                icon="ph:plug-duotone"
              >
                {addon?.map((item, index) => (
                  <SubMenuItem
                    key={index}
                    title={item.title}
                    href={item.href}
                    setSidebarOpened={setSidebarOpened}
                  />
                ))}
              </MenuItem>
            </ul>
          </nav>
        </div>
        <div className="flex h-16 shrink-0 items-center border-t border-primary-700 px-5">
          <Link
            href="/content-profile"
            className="flex items-center gap-2 p-0.5"
          >
            <span className="mask mask-blob h-8 w-8 min-w-[2rem]">
              <Image
                height={1000}
                width={1000}
                src="/img/avatars/3.svg"
                className="block w-full "
                alt=""
              />
            </span>

            <span
              className={`whitespace-nowrap text-sm text-white transition-all duration-300 hover:text-white/70 ${
                sidebarOpened ? "opacity-100" : "opacity-0"
              }`}
            >
              Clark Smith
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollapseableNav;

interface MenuItemProps {
  title: string;
  icon: string | IconifyIcon;
  children: React.ReactNode;
  sidebarOpened: boolean;
  activeSidebarMenu: string;
  setActive: (value: string) => void;
  setSidebarOpened: (value: boolean) => void;
}

export const MenuItem: FC<MenuItemProps> = ({
  title,
  icon,
  children,
  sidebarOpened,
  activeSidebarMenu,
  setActive,
  setSidebarOpened,
}) => {
  const menu = `${title.toLocaleLowerCase().replace(/" "/g, "-")}-menu`;
  const isActive = sidebarOpened && activeSidebarMenu === menu;

  const subMenuRef = useRef<HTMLDivElement>(null);

  function menuToggle() {
    if (isActive) {
      setActive("");
    } else {
      setActive(menu);
    }
    setSidebarOpened(true);
  }

  return (
    <li className={`${isActive ? "active" : ""}`}>
      <button
        className="group/menu-item flex h-[50px] w-full items-center px-5"
        onClick={menuToggle}
      >
        <span className="me-2.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-sm">
          <Icon
            icon={icon}
            className={`block h-6 w-6 transition-colors duration-300 ${
              isActive
                ? "text-white"
                : "text-white/70 group-hover/menu-item:text-white"
            }`}
          />
        </span>
        <span
          className={`line-clamp-1 flex-grow overflow-hidden whitespace-nowrap text-start text-sm transition-colors duration-300 ${
            isActive
              ? "text-white"
              : "text-white/70 group-hover/menu-item:text-white"
          }`}
        >
          {title}
        </span>

        <span className="me-0 ms-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-sm">
          <Icon
            icon={"pajamas:chevron-down"}
            className={`block h-5 w-5 text-white/70 transition-transform duration-300 group-hover/menu-item:text-white ${
              isActive ? "rotate-180" : ""
            } ${sidebarOpened ? "opacity-100 " : "opacity-0"}`}
          />
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        ref={subMenuRef}
        style={{
          maxHeight: isActive ? subMenuRef.current?.scrollHeight + "px" : "0px",
        }}
      >
        <ul className={`bg-primary-950/60 py-3 ps-5`}>{children}</ul>
      </div>
    </li>
  );
};

interface SubMenuItemProps {
  href: string;
  title: string;
  setSidebarOpened: (value: boolean) => void;
}

export const SubMenuItem: FC<SubMenuItemProps> = ({
  href,
  title,
  setSidebarOpened,
}) => {
  const path = usePathname();

  const isActive = path === href;

  return (
    <li
      onClick={() => {
        // setIsSidebarOpenedMobile(false);
        setSidebarOpened(false);
      }}
    >
      <Link
        className={`border-primary-800 relative ms-6 me-9 flex min-h-[34px] items-center border-r-[3px] text-sm transition-colors duration-300 ${
          isActive
            ? "text-white after:bg-primary-400 after:absolute after:-end-[3px] after:top-0 after:h-full after:w-1 after:rounded-full after:content-['']"
            : "text-white/70 hover:text-white"
        }`}
        href={href}
      >
        {title}
      </Link>
    </li>
  );
};

export const base = [
  {
    href: "/documentation/avatar",
    title: "Avatars",
    subtitle: "All avatar props",
    icon: "ph:horse-duotone",
  },
  {
    href: "/documentation/button",
    title: "Buttons",
    subtitle: "All button props",
    icon: "ph:subtract-duotone",
  },
  {
    href: "/documentation/button-link",
    title: "Button links",
    subtitle: "All button link props",
    icon: "ph:link-simple-horizontal-duotone",
  },
  {
    href: "/documentation/button-icon",
    title: "Icon buttons",
    subtitle: "All icon button props",
    icon: "ph:lightning-duotone",
  },
  {
    href: "/documentation/breadcrumb",
    title: "Breadcrumb",
    subtitle: "All breadcrumb props",
    icon: "ph:dots-three-outline-duotone",
  },
  {
    href: "/documentation/card",
    title: "Cards",
    subtitle: "All card props",
    icon: "ph:identification-card-duotone",
  },
  {
    href: "/documentation/dropdown",
    title: "Dropdowns",
    subtitle: "All dropdown props",
    icon: "ph:unite-square-duotone",
  },
  {
    href: "/documentation/iconbox",
    title: "Icon boxes",
    subtitle: "All iconbox props",
    icon: "ph:hexagon-duotone",
  },
  {
    href: "/documentation/loader",
    title: "Loaders",
    subtitle: "All loader props",
    icon: "ph:spinner-gap-duotone",
  },
  {
    href: "/documentation/message",
    title: "Messages",
    subtitle: "All message props",
    icon: "ph:frame-corners-duotone",
  },
  {
    href: "/documentation/modal",
    title: "Modal dialogs",
    subtitle: "All modal props",
    icon: "ph:selection-plus-duotone",
  },
  {
    href: "/documentation/progress",
    title: "Progress bars",
    subtitle: "All progress props",
    icon: "ph:thermometer-simple-duotone",
  },
  {
    href: "/documentation/table",
    title: "Tables",
    subtitle: "All table props",
    icon: "ph:table-duotone",
  },
  {
    href: "/documentation/pagination",
    title: "Pagination",
    subtitle: "All pagination props",
    icon: "ph:subtract-square-duotone",
  },
  {
    href: "/documentation/tabs",
    title: "Tabs",
    subtitle: "All tabs props",
    icon: "ph:square-half-duotone",
  },
  {
    href: "/documentation/tag",
    title: "Tags",
    subtitle: "All tag props",
    icon: "ph:tag-duotone",
  },
  {
    href: "/documentation/toggle-box",
    title: "Toggle boxes",
    subtitle: "All toggle box props",
    icon: "ph:selection-all-duotone",
  },
  {
    href: "/documentation/popover",
    title: "Popovers",
    subtitle: "All popover props",
    icon: "ph:selection-plus-duotone",
  },
  {
    href: "/documentation/tooltip",
    title: "Tooltips",
    subtitle: "All tooltip props",
    icon: "ph:chat-centered-duotone",
  },
];

export const form = [
  {
    href: "/documentation/combobox",
    title: "Comboboxes",
    subtitle: "All combobox props",
    icon: "ph:magnifying-glass-duotone",
  },
  {
    href: "/documentation/input",
    title: "Inputs",
    subtitle: "All input props",
    icon: "ph:keyboard-duotone",
  },
  {
    href: "/documentation/select",
    title: "Selects",
    subtitle: "All select props",
    icon: "ph:hand-pointing-duotone",
  },
  {
    href: "/documentation/listbox",
    title: "Listboxes",
    subtitle: "All listbox props",
    icon: "ph:square-half-bottom-duotone",
  },
  {
    href: "/documentation/textarea",
    title: "Textareas",
    subtitle: "All textarea props",
    icon: "ph:cursor-duotone",
  },
  {
    href: "/documentation/datepicker",
    title: "Datepickers",
    subtitle: "All datepicker props",
    icon: "ph:calendar-duotone",
  },
  {
    href: "/documentation/checkbox",
    title: "Checkboxes",
    subtitle: "All checkbox props",
    icon: "ph:check-duotone",
  },
  {
    href: "/documentation/radio",
    title: "Radio buttons",
    subtitle: "All radio props",
    icon: "ph:radio-button-duotone",
  },
  {
    href: "/documentation/toggle-switch",
    title: "Switches",
    subtitle: "All switch props",
    icon: "ph:toggle-left-duotone",
  },
  {
    href: "/documentation/toggle-switch-advanced",
    title: "Adv. switches",
    subtitle: "All advanced switch props",
    icon: "ph:yin-yang-duotone",
  },
  {
    href: "/documentation/input-file",
    title: "File inputs",
    subtitle: "All file inputs props",
    icon: "ph:cloud-arrow-up-duotone",
  },
];

export const addon = [
  {
    href: "/documentation/range-slider",
    title: "React Slider",
    subtitle: "All range slider props",
    icon: "ph:git-commit-duotone",
  },
  {
    href: "/documentation/lightbox",
    title: "React lightbox",
    subtitle: "All lightbox props",
    icon: "ph:image-duotone",
  },
  {
    href: "/documentation/toast",
    title: "React Hot Toast",
    subtitle: "All toast props",
    icon: "ph:align-center-horizontal-simple-duotone",
  },
  {
    href: "/documentation/marquee",
    title: "React marquee",
    subtitle: "All marquee props",
    icon: "ph:circles-three-plus-duotone",
  },
  {
    href: "/documentation/player",
    title: "React player",
    subtitle: "All player props",
    icon: "ph:video-duotone",
  },
  {
    href: "/documentation/swiper",
    title: "React swiper",
    subtitle: "All swiper props",
    icon: "ph:square-half-duotone",
  },
  {
    href: "/documentation/icons",
    title: "React Iconify",
    subtitle: "All Iconify props",
    icon: "ph:lightbulb-duotone",
  },
];
