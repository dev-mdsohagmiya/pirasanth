import { useState, useEffect } from "react";

// import { useState } from "react";
type SidebarProps = {
  value: String;
};
const Sidebar = ({ value }: SidebarProps) => {
  return (
    <div className="md:hidden">
      <div
        className={`fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[${value}] border-r bg-white shadow-xl transition duration-300 peer-checked:translate-x-0 lg:static lg:w-auto lg:translate-x-0 lg:border-r-0 lg:shadow-none`}
      >
        <div className="p-4 flex justify-end"></div>
        <div class="flex h-full flex-col justify-between lg:flex-row lg:items-center">
          <ul class="space-y-8 px-6 pt-32 text-gray-700 md:px-12 lg:flex lg:space-x-12 lg:space-y-0 lg:pt-0">
            <li>
              <a
                href="#"
                class="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:bg-cyan-100"
              >
                <span class="relative text-cyan-800">Home</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-cyan-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
              >
                <span class="relative group-hover:text-cyan-800">Services</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-cyan-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
              >
                <span class="relative group-hover:text-cyan-800">
                  Portfolio
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-cyan-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
              >
                <span class="relative group-hover:text-cyan-800">About us</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
