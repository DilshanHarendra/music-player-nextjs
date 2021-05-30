import React from 'react'
import FriendActivityCard from "../FriendActivityCard";


function RightSidebar(){
    return(
        <div className="bg-sidebar w-64 fixed top-16 right-0 h-screen  py-5 px-5 overflow-y-scroll right-sidebar hide-scroll-bar">

            <p className="font-bold text-lg"> Friend Activity</p>

            <div className="">
                {[0,1,2,3].map(friend=><FriendActivityCard  key={friend}  />)}
            </div>
            <button className="border mx-auto block mt-5 px-4 py-1 rounded-full">Find more</button>

        </div>
    )
}export default RightSidebar;
