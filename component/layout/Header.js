import React from 'react'
import Link from "next/link";
import Image from "next/image";
function Header(){
    return(
        <div className="w-screen  gradient-header text-gray-300 flex items-center justify-between absolute top-0 lef-0 z-20 py-5">
            <div className="flex items-center pl-4">
                <Link href="/"><Image src="/img/logo.png" width="45" height="45"/></Link>
                <Link href="/"><div className="px-4">Your Library</div></Link>
                <Link href="/">
                    <div className="px-4 flex items-center">
                        Playlists
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </Link>
            </div>

            <div className="flex items-center">
                <div className="flex items-center  mr-5">
                <div className="w-full relative">
                    <span className="absolute text-gray-500 top-1 left-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </span>
                    <input type="text"  className="bg-white pl-8 rounded-full px-3  text-gray-900" placeholder="search ..."/>
                </div>
                    <div className="pl-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                        </svg>
                    </div>
                </div>
                <div className="flex items-center w-64 px-5">
                    <div className="bg-gray-500 rounded-full p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <p className="truncate pl-3">Dilshan Perera</p>
                </div>
            </div>

        </div>
    )
}export default Header
