import HText from "@/shared/HText";
import { ProgramType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Program from "./Program";
import ActionButton from "@/shared/ActionButton";
import BenifitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const programs: Array<ProgramType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Move",
    description:
      "Exercises, workout routines, fitness tips and advice from our personal trainers.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Fuel",
    description:
      "Our experts whip up healthy recipes, how-to videos, meal prepping ideas and nutrition tips to fuel your life.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Live",
    description:
      "Tips and advice to lead a healthy lifestyle in mind, body and spirit.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggeerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Programs = ({ setSelectedPage }: Props) => {
  return (
    <section id="programs" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.PROGRAMS)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-base">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>

        {/* PROGRAMS */}
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {/* USE AN ARRAY TO STORE ALL THE ICONS AND TEXT 
            SINCE THEY HAVE THE SAME STRUCTURE */}
          {programs.map((program) => (
            <Program
              key={program.title}
              icon={program.icon}
              title={program.title}
              description={program.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTIONS */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-graphic"
            src={BenifitsPageGraphic}
          ></img>

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div
                className="before:absolute before:-top-20 before:-left-20
              before:z-[-1] before:content-abstractwaves"
              >
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPTION TEXT*/}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Join millions of happy members who are transforming their lives
                with our expert-led workouts, personalized plans, and supportive
                community. Whether you're just starting or pushing your limits,
                we make fitness fun, effective, and rewarding. Get stronger,
                feel better, and achieve your goals—one workout at a time!
              </p>

              <p className="my-5">
                With 24/7 access to workouts, nutrition guidance, and motivation
                from like-minded members, staying on track has never been
                easier. Our cutting-edge programs cater to all fitness levels,
                helping you build strength, boost energy, and stay committed.
                Join today and become part of a movement that’s changing
                lives—one rep at a time!
              </p>
            </motion.div>

            {/* JOIN NOW BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  JOIN NOW
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Programs;
