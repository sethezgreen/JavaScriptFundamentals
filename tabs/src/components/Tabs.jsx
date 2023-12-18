import React, { useState} from "react";

const Tabs = (props) => {
    const {tabs, currentTabIndex, setCurrentTabIndex} = props
    const [tabanimation, setTabAnimation] = useState(0)

    const setSelectedTab = (index) => {
        setCurrentTabIndex(index)
    }

    const tabStyle = (index) => {
        if (index === currentTabIndex) {
            return "selectedTab"
        }
        else {
            return "nonSelectedTab"
        }
    }

    return (
        <div>
            <h1>Tabs</h1>
            {
                tabs.map((item, index) => (
                    <div 
                        key={index}
                        onClick={(e) => { setSelectedTab(index); setTabAnimation(1)}}
                        className={`tab ${ tabStyle(index)}`}
                        onAnimationEnd={() => setTabAnimation(0)}
                        tabanimation = { tabanimation }
                        >
                        <p>{item.label}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Tabs