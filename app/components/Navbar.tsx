import Link from "next/link";
import React from "react";
import ThemeButton from "./ThemeButton";

const Navbar = () => {
  return (
    <div className='max-w-3xl mx-auto px-4 pt-3 sm:px-6 lg:px-8'>
      <div className='flex justify-between items-center w-full'>
        <Link href='/'>
          <h1 className='text-2xl font-medium'>
            Nyerishi <span className='text-teal-500'>Blog</span>
          </h1>
        </Link>

        <ThemeButton />
      </div>
    </div>
  );
};

export default Navbar;
