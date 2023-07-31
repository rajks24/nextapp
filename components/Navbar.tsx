'use client'

import Image from 'next/image';
import Link from 'next/link';
import siteMetadata from '@/siteMetadata'
import { Transition } from "@headlessui/react";


import React, { useState } from 'react';
import blogIcon from '@/public/icons/blog.svg'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
           
              <div className="flex gap-2 flex-shrink-0" >
                <Link href="/" >
                    <Image
                    className="h-8 w-8"
                    src={blogIcon}
                    alt="app image" />
                </Link>
                <Link className='font-bold text-2xl' href="/">{siteMetadata.title}</Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-auto font-semibold flex items-baseline space-x-4">     
                    <Link href="/" className="block py-2 pl-3 pr-4 bg-transparent text-blue-700 hover:bg-gray-100 hover:text-slate-700
                            rounded md:p-0" aria-current="page">
                        Home
                    </Link>
                    <Link href="/about" className="block py-2 pl-3 pr-4 text-cyan-800 hover:bg-gray-100 hover:text-slate-700 
                             rounded md:border-0  md:p-0 dark:text-white">
                        About
                    </Link>
                </div>
              </div>
            
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-blue-800 inline-flex items-center justify-center p-2 rounded-md 
                text-gray-100 hover:text-gray-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                focus:ring-offset-cyan-100 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  href="/"
                  className="bg-transparent text-blue-700 hover:bg-gray-100 hover:text-slate-700 block px-3 py-2 rounded-md text-base font-medium">
                  Home
                </Link>

                <Link
                  href="/about"
                  className="text-cyan-800 hover:bg-gray-100 hover:text-slate-700 block px-3 py-2 rounded-md text-base font-medium">
                  About
                </Link>

              </div>
            </div>
          )}
        </Transition>
      </nav>
  

            

 );
}
export default Navbar;