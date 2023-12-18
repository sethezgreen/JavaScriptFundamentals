import React from "react";

const Content = (props) => {
    const {tabs, currentTabIndex} = props
    
    return (
        <div>
            { tabs[currentTabIndex].content}
        </div>
    )
}

export default Content