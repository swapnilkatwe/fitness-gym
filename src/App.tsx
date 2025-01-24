import { useEffect, useState } from "react"
import Navbar from "./scenes/navbar"
import { SelectedPage } from "./shared/types";
import Home from "./scenes/Home"
import Benefits from "./scenes/Benefits"
import OurClasses from "./scenes/OurClasses";
function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(()=>{
    const handleScroll = () => {
      if (window.scrollY === 0) { // if At the top of page
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if(window.screenY !== 0) { // if not at top of page
        setIsTopOfPage(false);
      }
    }
    // ADD EVENT LISTENER FOR SCROLL
    window.addEventListener("scroll", handleScroll);
    
    // WHEN COMPONENT WILL UNMOUNT THIS RETRUN WILL EXECUTE
    return () =>{
      window.removeEventListener("scroll", handleScroll);
    }
  },[]);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage = {isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home 
      setSelectedPage={setSelectedPage}
      />
      <Benefits 
      setSelectedPage={setSelectedPage}
      />
      <OurClasses
      setSelectedPage={setSelectedPage}
      >
      </OurClasses>
    </div>
  )
}

export default App
