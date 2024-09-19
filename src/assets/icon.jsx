import React from "react";

function Icon({ children, link }) {
  return (
    <>
      <li className="hover:scale-125 transition-all duration-300 ease-in-out">
        <a 
          href={link} 
          className="text-lg"
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      </li>
    </>
  );
}

export default Icon;
