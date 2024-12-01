import React from "react";

export default function NavBar() {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Resume Builder</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/resume" className="hover:underline">
            Skills
            </a>
          </li>
          <li>
            <a href="/about" className="hover:underline">
              Education
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
