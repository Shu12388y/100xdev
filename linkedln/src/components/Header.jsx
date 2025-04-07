import React from "react";

export default function Header() {
    return (
      <div className="relative bg-blue-500 h-48">
        <img
          className="absolute bottom-[-40px] left-6 w-24 h-24 rounded-full border-4 border-white"
          src="https://via.placeholder.com/100"
          alt="Profile"
        />
        <div className="mt-16 p-6">
          <h1 className="text-2xl font-bold">John Doe</h1>
          <p className="text-sm text-gray-700">Full Stack Developer | React | Node.js</p>
          <p className="text-sm text-gray-600">San Francisco, CA · Contact info</p>
        </div>
      </div>
    );
  }
  