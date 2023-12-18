import { useState } from 'react'
import './App.css'
import Tabs from './components/Tabs'
import Content from './components/Content'

function App() {
  const tabsArray = [
    { label: "Tab 1", content: "This is tab 1 content"},
    { label: "Tab 2", content: "This is tab 2 content"},
    { label: "Tab 3", content: "This is tab 3 content"},
    { label: "Tab 4", content: "This is tab 4 content"}
  ]
  const [tabs, setTabs] = useState(tabsArray)
  const [currentTabIndex, setCurrentTabIndex] = useState(0)

  return (
    <div>
      <Tabs
        tabs = { tabs }
        currentTabIndex = { currentTabIndex }
        setCurrentTabIndex = { setCurrentTabIndex }
      />
      <Content
        tabs = { tabs }
        currentTabIndex = { currentTabIndex }
      />
    </div>
  )
}

export default App
