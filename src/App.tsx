// from: https://www.youtube.com/watch?v=I2NNxr3WPDo
// https://github.com/ed-roh/gym-typescript

// assumes index.tsx file in each 'scenes' directory
import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import OurClasses from "./scenes/ourClasses";
import Benefits from "@/scenes/benefits";
import ContactUs from "@/scenes/contactUs";
import Footer from "@/scenes/footer";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";

// typescript variables are capitalized:
// enums persist into runtime code (most typescript does not)
// **** moved to shared/types.ts ****
// enum SelectedPage {
//   Home = 'home',
//   Benefits = 'benefits',
//   OurClasses = 'ourclasses',
//   ContactUs = 'contactus',
// }

function App() {
  // set state default using enum, above
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  // used to highlight 'Home' option in mobile menu whenever at top of page:
  useEffect(() => {
    const handleScroll = () => {
      // if at top of window:
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      // could also use 'else' = personal preference
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    // when window scrolls, invoke 'handleScroll':
    window.addEventListener("scroll", handleScroll);
    // return = when component unmounts (when leave page) (helps w memory management)
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    <div className='app bg-gray-20'>
        <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      {/* need to pass in setSelectedPage for the buttons on home */}
      {/* so that we can navigate to different parts of the page */}
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  )
}

export default App
