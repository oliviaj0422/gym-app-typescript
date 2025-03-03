import { useEffect, useState } from "react";
import Navbar from "./scenes/navbar";
import { SelectedPage } from "@/shared/types";
import Home from "./scenes/home";
import Programs from "./scenes/programs";
import OurClass from "./scenes/ourClass";
import ContactUs from "./scenes/contactUs";
import Footer from "./scenes/footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.HOME,
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    {
      /* DEFINE A FUNCTION */
    }
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.HOME);
      } else {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />

      <Home setSelectedPage={setSelectedPage} />
      <Programs setSelectedPage={setSelectedPage} />
      <OurClass setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}
``;
export default App;
