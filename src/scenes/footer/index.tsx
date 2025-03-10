import Logo from "@/assets/Logo.png";
import { FooterMenu } from "@/shared/types";
import FooterMenuButton from "./FooterMenuButton";
import useMediaQuery from "@/hooks/useMediaQuery";
import FacebookIcon from "@/assets/facebook-app-symbol.png";
import InstagramIcon from "@/assets/instagram.png";
import YoutubeIcon from "@/assets/youtube.png";
import AppleDownloadIcon from "@/assets/apple-download-icon.png";
import GooglePlayDownloadIcon from "@/assets/googleplay-download-icon.png";

{
  /* THIS FOOTER IS A RECREATION OF GOODLIFE WEBSITE'S FOOTER */
}

const footerMenus: Array<FooterMenu> = [
  {
    title: "MEMBERSHIP",
    items: ["Join EvoGym", "Try EvoGym for free", "Log in to my account"],
  },
  {
    title: "CLASSES & TRAINING",
    items: ["Book a class", "Find a class", "Find training programs"],
  },
  {
    title: "CLUBS",
    items: ["Find a club", "Coming soon"],
  },
  {
    title: "WOMEN",
    items: [
      "Find classes for women",
      "Find training for women",
      "Find clubs for women",
    ],
  },
  {
    title: "CAREERS",
    items: ["Become a Trainer", "Become an Instructor", "Join our team"],
  },
  {
    title: "EVOGYM",
    items: ["About IgniteGym", "Contact Us", "FAQ"],
  },
];

const Footer = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const iconSize = `w-4 h-4`;

  return (
    <footer className="bg-primary-100 py-16">
      <div className="mx-auto w-4/6">
        {/* Logo AND HEADER */}
        <div className="px-30 mt-10 flex flex-col items-start justify-center">
          <img className="my-5" alt="logo" src={Logo} />
          <p className="mb-3 text-base font-bold">HISTORY</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          {/* CREATE A SECTION DIVIDER */}
          <div className="mx-auto mb-16 mt-10 w-[150px] border-t-4 border-primary-500" />
        </div>
      </div>
      <div className="mx-auto w-5/6">
        {/*  */}
        <div className="my-8 flex flex-col items-center justify-center gap-10 md:flex-row md:items-start md:justify-between">
          {footerMenus.map((content: FooterMenu, index) =>
            !isAboveMediumScreens ? (
              <FooterMenuButton
                key={`${content.title}-${index}`}
                title={content.title}
                items={content.items}
              />
            ) : (
              <div className="flex flex-col items-center md:items-start">
                <p className="font-bold">{content.title}</p>
                <div className="mt-3 flex flex-col items-center gap-2 text-sm md:items-start">
                  {content.items.map((item) => (
                    <p>{item}</p>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>

        <div className="mb-10 mt-16 w-full border-t-2 border-gray-100" />

        {/* THE BOTTOM PART */}
        <div className="flex flex-col items-center justify-center md:flex-row md:items-start md:justify-between">
          {/* SOCIAL MEDIAS */}
          <div className="flex flex-col items-center justify-center">
            <p className="mb-3 text-sm font-bold">Follow us</p>
            <div className="flex items-start justify-between gap-3">
              <a href="https://www.facebook.com/" target="_blank">
                {
                  <img
                    className={iconSize}
                    alt="facebook-icon"
                    src={FacebookIcon}
                  />
                }
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                {
                  <img
                    className={iconSize}
                    alt="facebook-icon"
                    src={InstagramIcon}
                  />
                }
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                {
                  <img
                    className={iconSize}
                    alt="facebook-icon"
                    src={YoutubeIcon}
                  />
                }
              </a>
            </div>
          </div>

          {/* MOBILE APP DOWNLOAD */}
          <div className="my-16 flex flex-col items-center justify-center md:my-0">
            <p className="mb-3 text-sm font-bold">Download the EvoGym app</p>
            <div className="flex items-start justify-between gap-3">
              <a href="https://www.facebook.com/" target="_blank">
                {
                  <img
                    className="w-18 h-10"
                    alt="apple-download-icon"
                    src={AppleDownloadIcon}
                  />
                }
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                {
                  <img
                    className="h-10"
                    alt="googleplay-icon"
                    src={GooglePlayDownloadIcon}
                  />
                }
              </a>
            </div>
          </div>
        </div>
      </div>

      {isAboveMediumScreens && (
        <div className="mb-10 mt-16 w-full border-t-2 border-gray-100" />
      )}

      <div className="mx-auto w-5/6">
        {/* COPYRIGHT */}
        <div className="flex flex-col items-center justify-center md:flex-row md:items-start md:justify-between">
          <p className="text-sm">Copyright EvoGym Fitness © 2025 </p>
          <div className="mt-3 flex items-start justify-between gap-5 text-xs underline">
            <a href="https://www.google.ca/">Accessibility</a>
            <a href="https://www.google.ca/">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
