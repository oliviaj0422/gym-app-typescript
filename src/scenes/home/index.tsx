import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Home({ setSelectedPage }: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      {/* we use motion.div here to jump to different sections after clicking on menu items */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.HOME)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          {/* motion.div gives an animation effect */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              {/* "before" PLACES ELEMENT BEFORE THE PARENT ELEMENT */}
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>
            <p className="mt-6 text-lg">
              Got goals? We’ll help you reach them. Whether it's Personal, Team
              or Performance Training, our certified instructors are here to
              help you succeed.
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            className="mt-5 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              JOIN NOW
            </ActionButton>
            <AnchorLink
              className="text-base font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.CONTACT_US)}
              href={`#${SelectedPage.OUR_CLASSES}`}
            >
              <p className="text-base">LEARN MORE</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
      </motion.div>

      {/* SPONSORS (WON'T SHOW UP ON MOBILE SCREEN) */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between">
              <img alt="redbull-sponsor" src={SponsorRedBull} />
              <img alt="forbes-sponsor" src={SponsorForbes} />
              <img alt="fortune-sponsor" src={SponsorFortune} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Home;
