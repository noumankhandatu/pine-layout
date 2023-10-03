import React from "react";

const AppButton = ({ children, startIcon, endIcon, className }) => {
  return (
    <button
      class={`bg-gray-900 hover:bg-gray-700 text-white font-bold  py-2 px-6 rounded-full flex justify-between align-center ${className}`}
    >
      {startIcon && startIcon}
      <span className="ml-2 mr-2"> {children}</span>
      {endIcon ? endIcon : ""}
    </button>
  );
};

export default AppButton;

export const PillBtn = () => {
  return (
    <>
      <div class="flex items-center rounded-full bg-white text-black   p-2 w-22 border w-56  text-center">
        <div class="flex items-center space-x-2 text-center">
          <svg
            style={{ color: "orange" }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
            />
          </svg>

          <span class="">15000</span>
        </div>
        <div class="h-6 w-1 bg-bgPrimary mx-2"></div>
        <div class="flex items-center space-x-2 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.412 15.655L9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457L3 3m5.457 5.457l7.086 7.086m0 0L21 21"
            />
          </svg>
          <span class="">Github</span>
        </div>
      </div>
    </>
  );
};
