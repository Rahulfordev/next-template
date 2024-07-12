"use client";
import React, { useState } from "react";
import Image from "next/image";
import avatar from "../../public/image/avatar.png";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setIsOpenSubMenu(!isOpenSubMenu);
  };
  return (
    <aside
      className={`fixed top-0 left-0 w-80 min-w-[260px] h-full bg-white border-r border-gray-300 transform transition-transform md:relative md:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:col-start-1 md:row-start-1 md:row-end-3`}
    >
      <div className="flex flex-col items-center gap-10 py-6 h-screen overflow-y-auto no-scrollbar">
        <div>
          <div className="flex items-center justify-between pb-4">
            <div className="flex items-center gap-4">
              <Image
                className="sidebar__user-avatar"
                src={avatar}
                height={56}
                width={56}
                alt="avatar"
              />
              <div>
                <h4 className="text-lg font-medium text-gray-900">
                  Khaby Lame
                </h4>
                <p className="text-sm font-normal text-gray-500">@khabylame</p>
              </div>
            </div>
            <button
              className="flex w-10 h-10 justify-center items-center cursor-pointer rounded bg-white shadow-md"
              onClick={toggleSidebar}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="mdi:menu-open">
                  <path
                    id="Vector"
                    d="M21 15.61L19.59 17L14.58 12L19.59 7L21 8.39L17.44 12L21 15.61ZM3 6H16V8H3V6ZM3 13V11H13V13H3ZM3 18V16H16V18H3Z"
                    fill="#0B0D23"
                  />
                </g>
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <button className="flex w-[272px] h-14 px-4 py-3.5 justify-between items-center rounded-lg border border-purple-100 cursor-pointer bg-purple-600 text-white">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4 22C3.45 22 2.97917 21.8042 2.5875 21.4125C2.19583 21.0208 2 20.55 2 20V8C2 7.45 2.19583 6.97917 2.5875 6.5875C2.97917 6.19583 3.45 6 4 6H8V4C8 3.45 8.19583 2.97917 8.5875 2.5875C8.97917 2.19583 9.45 2 10 2H14C14.55 2 15.0208 2.19583 15.4125 2.5875C15.8042 2.97917 16 3.45 16 4V6H20C20.55 6 21.0208 6.19583 21.4125 6.5875C21.8042 6.97917 22 7.45 22 8V20C22 20.55 21.8042 21.0208 21.4125 21.4125C21.0208 21.8042 20.55 22 20 22H4ZM4 20H20V8H4V20ZM10 6H14V4H10V6ZM11 15V18H13V15H16V13H13V10H11V13H8V15H11Z"
                    fill="white"
                  />
                </svg>
                <span className="text-base font-medium">Order advertising</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M3.33331 9.16669V10.8334H13.3333L8.74998 15.4167L9.93331 16.6L16.5333 10L9.93331 3.40002L8.74998 4.58336L13.3333 9.16669H3.33331Z"
                  fill="white"
                />
              </svg>
            </button>

            <button className="flex w-[272px] h-14 px-4 py-3.5 justify-between items-center rounded-lg border border-purple-100 bg-white text-purple-500 cursor-pointer">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 14H14V12H6V14ZM6 11H18V9H6V11ZM6 8H18V6H6V8ZM2 22V4C2 3.45 2.19583 2.97917 2.5875 2.5875C2.97917 2.19583 3.45 2 4 2H20C20.55 2 21.0208 2.19583 21.4125 2.5875C21.8042 2.97917 22 3.45 22 4V16C22 16.55 21.8042 17.0208 21.4125 17.4125C21.0208 17.8042 20.55 18 20 18H6L2 22ZM5.15 16H20V4H4V17.125L5.15 16Z"
                    fill="#5137E0"
                  />
                </svg>
                <span className="text-base font-medium">My Messages</span>
                <span className="flex px-3 py-1.5 items-center gap-2.5 rounded-full bg-gray-100">
                  5
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M3.33331 9.16669V10.8334H13.3333L8.74998 15.4167L9.93331 16.6L16.5333 10L9.93331 3.40002L8.74998 4.58336L13.3333 9.16669H3.33331Z"
                  fill="#5137E0"
                />
              </svg>
            </button>

            <button className="flex w-[272px] h-14 px-4 py-3.5 justify-between items-center rounded-lg border border-purple-100 bg-white text-purple-500 cursor-pointer">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11 12C9.9 12 8.95833 11.6083 8.175 10.825C7.39167 10.0417 7 9.1 7 8C7 6.9 7.39167 5.95833 8.175 5.175C8.95833 4.39167 9.9 4 11 4C12.1 4 13.0417 4.39167 13.825 5.175C14.6083 5.95833 15 6.9 15 8C15 9.1 14.6083 10.0417 13.825 10.825C13.0417 11.6083 12.1 12 11 12ZM11 10C11.55 10 12.0208 9.80417 12.4125 9.4125C12.8042 9.02083 13 8.55 13 8C13 7.45 12.8042 6.97917 12.4125 6.5875C12.0208 6.19583 11.55 6 11 6C10.45 6 9.97917 6.19583 9.5875 6.5875C9.19583 6.97917 9 7.45 9 8C9 8.55 9.19583 9.02083 9.5875 9.4125C9.97917 9.80417 10.45 10 11 10ZM22.1 23.5L18.9 20.3C18.55 20.5 18.175 20.6667 17.775 20.8C17.375 20.9333 16.95 21 16.5 21C15.25 21 14.1875 20.5625 13.3125 19.6875C12.4375 18.8125 12 17.75 12 16.5C12 15.25 12.4375 14.1875 13.3125 13.3125C14.1875 12.4375 15.25 12 16.5 12C17.75 12 18.8125 12.4375 19.6875 13.3125C20.5625 14.1875 21 15.25 21 16.5C21 16.95 20.9333 17.375 20.8 17.775C20.6667 18.175 20.5 18.55 20.3 18.9L23.5 22.1L22.1 23.5ZM16.5 19C17.2 19 17.7917 18.7583 18.275 18.275C18.7583 17.7917 19 17.2 19 16.5C19 15.8 18.7583 15.2083 18.275 14.725C17.7917 14.2417 17.2 14 16.5 14C15.8 14 15.2083 14.2417 14.725 14.725C14.2417 15.2083 14 15.8 14 16.5C14 17.2 14.2417 17.7917 14.725 18.275C15.2083 18.7583 15.8 19 16.5 19ZM3 20V17.225C3 16.6583 3.14167 16.1333 3.425 15.65C3.70833 15.1667 4.1 14.8 4.6 14.55C5.45 14.1167 6.40833 13.75 7.475 13.45C8.54167 13.15 9.725 13 11.025 13C10.825 13.3 10.6542 13.6208 10.5125 13.9625C10.3708 14.3042 10.2583 14.6583 10.175 15.025C9.175 15.1083 8.28333 15.2792 7.5 15.5375C6.71667 15.7958 6.05833 16.0667 5.525 16.35C5.35833 16.4333 5.22917 16.5542 5.1375 16.7125C5.04583 16.8708 5 17.0417 5 17.225V18H10.175C10.2583 18.3667 10.3708 18.7167 10.5125 19.05C10.6542 19.3833 10.825 19.7 11.025 20H3Z"
                    fill="#5137E0"
                  />
                </svg>
                <span className="text-base font-medium">
                  Search for bloggers
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M3.33331 9.16669V10.8334H13.3333L8.74998 15.4167L9.93331 16.6L16.5333 10L9.93331 3.40002L8.74998 4.58336L13.3333 9.16669H3.33331Z"
                  fill="#5137E0"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-gray-500 text-sm font-medium pb-2">Orders</span>
          <div className="relative flex flex-col items-center w-[272px] border border-gray-300 rounded-lg px-4 bg-white transition-all duration-500">
            <button
              className="flex justify-between items-center w-[250px] h-14 px-4 py-[15px] text-primary cursor-pointer"
              onClick={toggleSubMenu}
            >
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 19V17H21V19H9ZM9 13V11H21V13H9ZM9 7V5H21V7H9ZM5 20C4.45 20 3.97917 19.8042 3.5875 19.4125C3.19583 19.0208 3 18.55 3 18C3 17.45 3.19583 16.9792 3.5875 16.5875C3.97917 16.1958 4.45 16 5 16C5.55 16 6.02083 16.1958 6.4125 16.5875C6.80417 16.9792 7 17.45 7 18C7 18.55 6.80417 19.0208 6.4125 19.4125C6.02083 19.8042 5.55 20 5 20ZM5 14C4.45 14 3.97917 13.8042 3.5875 13.4125C3.19583 13.0208 3 12.55 3 12C3 11.45 3.19583 10.9792 3.5875 10.5875C3.97917 10.1958 4.45 10 5 10C5.55 10 6.02083 10.1958 6.4125 10.5875C6.80417 10.9792 7 11.45 7 12C7 12.55 6.80417 13.0208 6.4125 13.4125C6.02083 13.8042 5.55 14 5 14ZM5 8C4.45 8 3.97917 7.80417 3.5875 7.4125C3.19583 7.02083 3 6.55 3 6C3 5.45 3.19583 4.97917 3.5875 4.5875C3.97917 4.19583 4.45 4 5 4C5.55 4 6.02083 4.19583 6.4125 4.5875C6.80417 4.97917 7 5.45 7 6C7 6.55 6.80417 7.02083 6.4125 7.4125C6.02083 7.80417 5.55 8 5 8Z"
                    fill="#343754"
                  />
                </svg>
                <span>My orders</span>
              </div>
              <svg
                className={`transition-transform duration-500 ${
                  isOpenSubMenu ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z"
                  fill="#343754"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                isOpenSubMenu ? "h-auto" : "h-0"
              }`}
            >
              <p className="pt-2">no items yet</p>
            </div>
          </div>
          <div className="relative flex flex-col items-center w-[272px] border border-gray-300 rounded-lg px-4 bg-white transition-all duration-500">
            <button
              className="flex justify-between items-center w-[250px] h-14 px-4 py-[15px] text-primary cursor-pointer"
              onClick={toggleSubMenu}
            >
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H14.1C14.0333 4.33333 14 4.66667 14 5C14 5.33333 14.0333 5.66667 14.1 6H4L12 11L15.65 8.725C15.8833 8.94167 16.1375 9.12917 16.4125 9.2875C16.6875 9.44583 16.975 9.58333 17.275 9.7L12 13L4 8V18H20V9.9C20.3833 9.81667 20.7417 9.7 21.075 9.55C21.4083 9.4 21.7167 9.21667 22 9V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM19 8C18.1667 8 17.4583 7.70833 16.875 7.125C16.2917 6.54167 16 5.83333 16 5C16 4.16667 16.2917 3.45833 16.875 2.875C17.4583 2.29167 18.1667 2 19 2C19.8333 2 20.5417 2.29167 21.125 2.875C21.7083 3.45833 22 4.16667 22 5C22 5.83333 21.7083 6.54167 21.125 7.125C20.5417 7.70833 19.8333 8 19 8Z"
                    fill="#343754"
                  />
                </svg>
                <span>Offers</span>
              </div>
              <svg
                className={`transition-transform duration-500 ${
                  isOpenSubMenu ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z"
                  fill="#343754"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                isOpenSubMenu ? "h-auto" : "h-0"
              }`}
            >
              <p className="pt-2">no items yet</p>
            </div>
          </div>
          <div className="relative flex flex-col items-center w-[272px] border border-gray-300 rounded-lg px-4 bg-white transition-all duration-500">
            <button
              className="flex justify-between items-center w-[250px] h-14 px-4 py-[15px] text-primary cursor-pointer"
              onClick={toggleSubMenu}
            >
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M1 20V17.2C1 16.6333 1.14583 16.1125 1.4375 15.6375C1.72917 15.1625 2.11667 14.8 2.6 14.55C3.63333 14.0333 4.68333 13.6458 5.75 13.3875C6.81667 13.1292 7.9 13 9 13C10.1 13 11.1833 13.1292 12.25 13.3875C13.3167 13.6458 14.3667 14.0333 15.4 14.55C15.8833 14.8 16.2708 15.1625 16.5625 15.6375C16.8542 16.1125 17 16.6333 17 17.2V20H1ZM19 20V17C19 16.2667 18.7958 15.5625 18.3875 14.8875C17.9792 14.2125 17.4 13.6333 16.65 13.15C17.5 13.25 18.3 13.4208 19.05 13.6625C19.8 13.9042 20.5 14.2 21.15 14.55C21.75 14.8833 22.2083 15.2542 22.525 15.6625C22.8417 16.0708 23 16.5167 23 17V20H19ZM9 12C7.9 12 6.95833 11.6083 6.175 10.825C5.39167 10.0417 5 9.1 5 8C5 6.9 5.39167 5.95833 6.175 5.175C6.95833 4.39167 7.9 4 9 4C10.1 4 11.0417 4.39167 11.825 5.175C12.6083 5.95833 13 6.9 13 8C13 9.1 12.6083 10.0417 11.825 10.825C11.0417 11.6083 10.1 12 9 12ZM19 8C19 9.1 18.6083 10.0417 17.825 10.825C17.0417 11.6083 16.1 12 15 12C14.8167 12 14.5833 11.9792 14.3 11.9375C14.0167 11.8958 13.7833 11.85 13.6 11.8C14.05 11.2667 14.3958 10.675 14.6375 10.025C14.8792 9.375 15 8.7 15 8C15 7.3 14.8792 6.625 14.6375 5.975C14.3958 5.325 14.05 4.73333 13.6 4.2C13.8333 4.11667 14.0667 4.0625 14.3 4.0375C14.5333 4.0125 14.7667 4 15 4C16.1 4 17.0417 4.39167 17.825 5.175C18.6083 5.95833 19 6.9 19 8ZM3 18H15V17.2C15 17.0167 14.9542 16.85 14.8625 16.7C14.7708 16.55 14.65 16.4333 14.5 16.35C13.6 15.9 12.6917 15.5625 11.775 15.3375C10.8583 15.1125 9.93333 15 9 15C8.06667 15 7.14167 15.1125 6.225 15.3375C5.30833 15.5625 4.4 15.9 3.5 16.35C3.35 16.4333 3.22917 16.55 3.1375 16.7C3.04583 16.85 3 17.0167 3 17.2V18ZM9 10C9.55 10 10.0208 9.80417 10.4125 9.4125C10.8042 9.02083 11 8.55 11 8C11 7.45 10.8042 6.97917 10.4125 6.5875C10.0208 6.19583 9.55 6 9 6C8.45 6 7.97917 6.19583 7.5875 6.5875C7.19583 6.97917 7 7.45 7 8C7 8.55 7.19583 9.02083 7.5875 9.4125C7.97917 9.80417 8.45 10 9 10Z"
                    fill="#343754"
                  />
                </svg>
                <span>Performers</span>
              </div>
              <svg
                className={`transition-transform duration-500 ${
                  isOpenSubMenu ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z"
                  fill="#343754"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                isOpenSubMenu ? "h-auto" : "h-0"
              }`}
            >
              <p className="pt-2">no items yet</p>
            </div>
          </div>
          <div className="relative flex flex-col items-center w-[272px] border border-gray-300 rounded-lg px-4 bg-white transition-all duration-500">
            <button
              className="flex justify-between items-center w-[250px] h-14 px-4 py-[15px] text-primary cursor-pointer"
              onClick={toggleSubMenu}
            >
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4 23V21H20V23H4ZM4 3V1H20V3H4ZM12 13C12.8333 13 13.5417 12.7083 14.125 12.125C14.7083 11.5417 15 10.8333 15 10C15 9.16667 14.7083 8.45833 14.125 7.875C13.5417 7.29167 12.8333 7 12 7C11.1667 7 10.4583 7.29167 9.875 7.875C9.29167 8.45833 9 9.16667 9 10C9 10.8333 9.29167 11.5417 9.875 12.125C10.4583 12.7083 11.1667 13 12 13ZM4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM5.75 18C6.5 17.0667 7.40833 16.3333 8.475 15.8C9.54167 15.2667 10.7167 15 12 15C13.2833 15 14.4583 15.2667 15.525 15.8C16.5917 16.3333 17.5 17.0667 18.25 18H20V6H4V18H5.75ZM8.7 18H15.3C14.8167 17.6667 14.2958 17.4167 13.7375 17.25C13.1792 17.0833 12.6 17 12 17C11.4 17 10.8208 17.0833 10.2625 17.25C9.70417 17.4167 9.18333 17.6667 8.7 18ZM12 11C11.7167 11 11.4792 10.9042 11.2875 10.7125C11.0958 10.5208 11 10.2833 11 10C11 9.71667 11.0958 9.47917 11.2875 9.2875C11.4792 9.09583 11.7167 9 12 9C12.2833 9 12.5208 9.09583 12.7125 9.2875C12.9042 9.47917 13 9.71667 13 10C13 10.2833 12.9042 10.5208 12.7125 10.7125C12.5208 10.9042 12.2833 11 12 11Z"
                    fill="#343754"
                  />
                </svg>
                <span>My contacts</span>
              </div>
              <svg
                className={`transition-transform duration-500 ${
                  isOpenSubMenu ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z"
                  fill="#343754"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                isOpenSubMenu ? "h-auto" : "h-0"
              }`}
            >
              <p className="pt-2">no items yet</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-gray-500 text-sm font-medium pb-2">
            Finance
          </span>
          <div className="relative flex flex-col items-center w-[272px] border border-gray-300 rounded-lg px-4 bg-white transition-all duration-500">
            <button
              className="flex justify-between items-center w-[250px] h-14 px-4 py-[15px] text-primary cursor-pointer"
              onClick={toggleSubMenu}
            >
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 17V10H7V17H5ZM11 17V10H13V17H11ZM2 21V19H22V21H2ZM17 17V10H19V17H17ZM2 8V6L12 1L22 6V8H2ZM6.45 6H17.55L12 3.25L6.45 6Z"
                    fill="#343754"
                  />
                </svg>
                <span>My balance</span>
                <span className="flex items-center gap-2 px-2 py-1 border border-primary text-primary text-sm font-medium rounded-lg">
                  $100
                </span>
              </div>
              <svg
                className={`transition-transform duration-500 ${
                  isOpenSubMenu ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z"
                  fill="#343754"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                isOpenSubMenu ? "h-auto" : "h-0"
              }`}
            >
              <p className="pt-2">no items yet</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-gray-500 text-sm font-medium pb-2">
            System & Service
          </span>
          <button className="flex justify-between items-center w-[272px] h-14 px-4 py-[14px] text-primary cursor-pointer border border-gray-300 rounded-lg">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 17V10H7V17H5ZM11 17V10H13V17H11ZM2 21V19H22V21H2ZM17 17V10H19V17H17ZM2 8V6L12 1L22 6V8H2ZM6.45 6H17.55L12 3.25L6.45 6Z"
                  fill="#343754"
                />
              </svg>
              <span>Settings</span>
            </div>
          </button>
          <button className="flex justify-between items-center w-[272px] h-14 px-4 py-[14px] text-primary cursor-pointer border border-gray-300 rounded-lg">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 17V10H7V17H5ZM11 17V10H13V17H11ZM2 21V19H22V21H2ZM17 17V10H19V17H17ZM2 8V6L12 1L22 6V8H2ZM6.45 6H17.55L12 3.25L6.45 6Z"
                  fill="#343754"
                />
              </svg>
              <span>Help with the site</span>
            </div>
          </button>
          <button className="flex justify-between items-center w-[272px] h-14 px-4 py-[14px] text-primary cursor-pointer border border-gray-300 rounded-lg">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 17V10H7V17H5ZM11 17V10H13V17H11ZM2 21V19H22V21H2ZM17 17V10H19V17H17ZM2 8V6L12 1L22 6V8H2ZM6.45 6H17.55L12 3.25L6.45 6Z"
                  fill="#343754"
                />
              </svg>
              <span>Our news</span>
            </div>
          </button>
          <button className="flex justify-between items-center w-[272px] h-14 px-4 py-[14px] text-primary cursor-pointer border border-gray-300 rounded-lg">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 17V10H7V17H5ZM11 17V10H13V17H11ZM2 21V19H22V21H2ZM17 17V10H19V17H17ZM2 8V6L12 1L22 6V8H2ZM6.45 6H17.55L12 3.25L6.45 6Z"
                  fill="#343754"
                />
              </svg>
              <span>Contacts</span>
            </div>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
