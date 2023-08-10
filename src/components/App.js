
import React,{useState} from "react";
import './../styles/App.css';
import Tabs from "./Tabs"

const App = () => {
  let [tabs,setTabs] = useState([{title:"Tab 1",content:"This is the Content for Tab 1"},{title:"Tab 2",content:"This is the Content for Tab 2"},{title:"Tab 3",content:"This is the Content for Tab 3"},{title:"Tab A",content:"This is the Content for Tab A"},{title:"Tab B",content:"This is the Content for Tab B"},{title:"Tab C",content:"This is the Content for Tab C"}])
  return (
    <div>
        {/* Do not remove the main div */}
        <Tabs tabs={tabs} setTabs={setTabs}/>
    </div>
  )
}

export default App
