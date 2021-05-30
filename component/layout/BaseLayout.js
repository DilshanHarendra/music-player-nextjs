import React from 'react'
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Header from "./Header";

function BaseLayout(props){
    return(
        <div className="bg-primary w-screen max-w-screen max-h-screen h-screen overflow-y-auto text-gray-50">
            <Header/>
            <div className="w-full">
                {props.children}
            </div>
            <RightSidebar/>
        </div>
    )
}export default BaseLayout
