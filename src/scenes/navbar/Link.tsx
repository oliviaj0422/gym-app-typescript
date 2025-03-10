import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useLocation, useNavigate } from "react-router";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

function Link({ page, selectedPage, setSelectedPage }: Props) {
  const navigate = useNavigate();
  const location = useLocation();

  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  const handleNavigate = () => {
    // if (location.pathname === "") {
    //   <AnchorLink
    //     className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
    //     href={`#${lowerCasePage}`}
    //     onClick={() => setSelectedPage(lowerCasePage)}
    //   >
    //     {page}
    //   </AnchorLink>;
    // } else {
    //   navigate("/");
    //   setTimeout(() => {
    //     document
    //       .getElementById(lowerCasePage)
    //       ?.scrollIntoView({ behavior: "smooth" });
    //   }, 100);
    // }
    navigate("/");
    setTimeout(() => {
      document
        .getElementById(lowerCasePage)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    setSelectedPage(lowerCasePage);
  };

  return location.pathname === "/" ? (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  ) : (
    <button
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
      onClick={() => handleNavigate()}
    >
      {page}
    </button>
  );
}

export default Link;
