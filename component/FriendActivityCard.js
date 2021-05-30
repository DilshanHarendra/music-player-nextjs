import React from 'react'

function FriendActivityCard(){
    return(
        <div className="flex items-start mt-5 w-full pt-1">
            <div className="bg-gray-500 rounded-full p-2 mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div className="pl-4 w-full relative  mt-2">
                <span className="text-xs whitespace-nowrap width-fit-content absolute -top-3 right-5">33 min</span>
                <p className="font-semibold text-lg truncate w-9/12 ">Abc Perera perera asd asd</p>

                <p className="text-xs text-gray-300 truncate">country</p>
                <p className="text-xs text-gray-300 truncate">song name</p>
                <div className="flex items-center text-xs text-gray-300 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                    <span className="ml-2">Playing</span>
                </div>
            </div>
        </div>
    )
}export default FriendActivityCard;
