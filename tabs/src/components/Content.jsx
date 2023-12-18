import React from "react";

const Content = (props) => {
    const {tabs, currentTabIndex} = props
    
    return (
        <div className="content">
            <p>{ tabs[currentTabIndex].content}</p>
        </div>
    )
}

export default Content