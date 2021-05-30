import React from 'react'

function BaseLayout(props){
    return(
        <div className="bg-red-500">
            {props.children}
        </div>
    )
}export default BaseLayout
