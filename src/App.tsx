import { useEffect, useState } from "react";
import Navbar from "./scenes/navbar";
import { SelectedPage } from "@/shared/types";
import Home from "./scenes/home";
import Programs from "./scenes/programs";
import OurClass from "./scenes/ourClass";
import ContactUs from "./scenes/contactUs";
import Footer from "./scenes/footer";
import { BrowserRouter, Route, Routes } from "react-router";
import SignIn from "./scenes/signIn";

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
    <BrowserRouter>
      <div className="app bg-gray-20">
        <Navbar
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          isTopOfPage={isTopOfPage}
        />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home setSelectedPage={setSelectedPage} />
                <Programs setSelectedPage={setSelectedPage} />
                <OurClass setSelectedPage={setSelectedPage} />
                <ContactUs setSelectedPage={setSelectedPage} />
                <Footer />
              </>
            }
          />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
``;
export default App;
