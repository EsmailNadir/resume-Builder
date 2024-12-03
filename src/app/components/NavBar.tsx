import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Resume Builder</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/resume" className="hover:underline">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              Education
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
