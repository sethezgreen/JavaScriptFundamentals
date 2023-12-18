import React, { useState} from "react";

const Tabs = (props) => {
    const {tabs, currentTabIndex, setCurrentTabIndex} = props

    const setSelectedTab = (index) => {
        setCurrentTabIndex(index)
    }

    return (
        <div>
            <h1>Tabs</h1>
            {
                tabs.map((item, index) => (
                    <div key={index} onClick={(e) => setSelectedTab(index)} className="tab">
                        <p>{item.label}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Tabs