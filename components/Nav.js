import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="mt-6 pb-6 mb-3 ml-12 border-b border-grey-300">
      <ul class="flex">
        <li class="mr-16 hover:text-blue-800 hover:cursor-pointer hover:font-semibold">
          <Link href="/">Home</Link>
        </li>
        <li class="mr-16 hover:text-blue-800 hover:cursor-pointer hover:font-semibold">
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li class="mr-16 hover:text-blue-800 hover:cursor-pointer hover:font-semibold">
          <Link href="/criteria">Criteria</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
