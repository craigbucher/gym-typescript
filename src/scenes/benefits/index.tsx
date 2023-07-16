import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";

// array of benefits information:
// to add benefit, just add info here:
// const benefits: Array<Object> = [		<== better to define object items, instead (icon: JSX.Element, etc.)
// in this case, we'll define 'BenefitType' in types.ts and use it here
const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Professional Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];

// parent container:
const container = {
  hidden: {},	// don't do anything
  visible: {
    transition: { staggerChildren: 0.2 },	// render each child/div .2 seconds apart
  },
};

// set typescript types:
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
		// id="benefits" = for anchor-link-smooth-scroll
		// w-5/6 = take up 5/6th of page width
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
			{/* <motion.div> = */}
      <motion.div
			// motion.div = framer-motion
			// when enter this div, change text color of 'Benefits' in navbar
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}	// only run once when 50% of viewport becomes visible
          transition={{ duration: 0.5 }}	// 0.5 seconds
          variants={{
            hidden: { opacity: 0, x: -50 },	// start invisible and 50px to left of final position
            visible: { opacity: 1, x: 0 },	// 100% opacity/visible and in final position
          }}
        >
          <HText>MORE THAN JUST GYM</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>

        {/* BENEFITS  - box for each benefit */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"	// use flex when on smaller than medium screens
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}	// 'container' variable, from above
        >
					{/* benefit: BenefitType = optional, but recommended */}
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}	// React requires each item in map to have a unique key
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

				{/* Bottom image and additional text: */}
        {/* GRAPHICS AND DESCRIPTION */}
				{/* items-center = center vertically */}
				{/* justify-between = 'equal amoutnt of space bewteen each item' */}
				{/* md:mt-28 md:flex = add top margin and use flex on medium and larger screens */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
							{/* Add 'AbstractWaves' image above and to the left of text */}
              {/* before:asolute = always in same position relative to parent (https://tailwind-elements.com/docs/standard/extended/position-absolute/) */}
							{/* before:-top-20 before:-left-20 = above and to left of parent */}
							{/* before:z-[1] = send to back */}
							{/* before:content-abstractwaves = assets/AbstractWaves.png, defined in talwind.config.js */}
							<div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}	// run animation once, when 50% of viewport/div is visible
                  transition={{ duration: 0.5 }}	// duration of 0.5 secs
                  variants={{
                    hidden: { opacity: 0, x: 50 },	// start invisible and to the right
                    visible: { opacity: 1, x: 0 },	// end visible and in final position
                  }}
                >
									{/* imported HText styling component: */}
                  <HText>
										{/* {" "} = force a space: */}
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}	// run animation once, when 50% of viewport/div is visible
              transition={{ delay: 0.2, duration: 0.5 }}	// run for 0.5 secs after 0.2 sec delay
              variants={{
                hidden: { opacity: 0, x: 50 },	// start invisible and to the right
                visible: { opacity: 1, x: 0 },	// end visible and in final position
              }}
            >
              <p className="my-5">
                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                Felis orci diam odio.
              </p>
              <p className="mb-5">
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
							{/* Add 'Sparkles' image below and to the right of button */}
              {/* before:asolute = always in same position relative to parent (https://tailwind-elements.com/docs/standard/extended/position-absolute/) */}
							{/* before:-bottom-20 before:-right-40 = below and to right of parent */}
							{/* before:z-[1] = send to back */}
							{/* before:content-sparkles = assets/Sparkles.png, defined in talwind.config.js */}
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;