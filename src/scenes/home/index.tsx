import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
// text as image, so don't have to import a font size just for this:
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
// framer-motion = <motion.div>

// set typescript types:
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");	// breakpoint = 1060px

  // Much of the css formatting here is to deal with page responsiveness
  // between desktop screens and mobile screens
  // "Use flex and grid as much as you can, without having to resort to
  // absolute position"

  return (
		// anchor-link-scroll requires an 'id':
		// md:h-full = full height when medium screen or larger
		// md:pb-0 = 0 bottom padding for medium screen or larger
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      {/* 'motion.div = framer-motion = subtle animation: */}
      {/* components enter screen from left side and settle into place */}
      <motion.div
				// md:flex = flex when screen medium or larger
				// md:h-5/6 = height 5/6ths of screen when medium or larger ('sponsors' takes the other 1/6th)
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}  // when enter this div, set 'SelectedPage' to 'Home' (darkens text in navbar)
      >
        {/* MAIN HEADER = Left side */}
				{/* z-10 = keep on top */}
				{/* md:bais-3/5 = flex basis of 3/5 for medium and larger screens */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS = "EVOGYM" and related text */}
          <motion.div
            className="md:-mt-20"	// -mt-20 = negative margin top = "push it up a little"
            initial="hidden"  // items not initially visible in animation
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}  // once = only trigger animation once
            // amount: 0.5 = 50% of div must be visible before it triggers
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 }, // initial state = invisible, 50 pixels right
              visible: { opacity: 1, x: 0 },  // final state = visible, in final position
            }}
          >
						{/* "EVOGYM evolutionary fitness" */}
						{/* set position=relative for 'parent' component */}
						{/* 'child' component is next div down */}
            <div className="relative">
							{/* before: creates a pseudo-element that is the first child of the */}
							{/* selected element. It is often used to add cosmetic content to an */}
              {/* element with the content property. It is inline by default  */}
							{/* 'child' component should be position=absolute */}
							{/* before:-top-20 before:-left-20 = move up and to the left */}
							{/* before:z-[-1] = send backward/behind */}
							{/* md:before:content-evolvetext - use 'EvolveText.png' ('content-evolvetext' configured in tailwind.config.js) */}
							<div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>
						{/* rest of text */}
            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>

          {/* ACTIONS = buttons at bottom of header */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}  // delay: 0.2 = wait 0.2 secs before animation
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
							{/* dummy tag */}
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE - right side */}
        <div
				// basis-3/5 = try to take up to 3/5 width
				// md:ml-40 md:mt-16 md:justify-items-end = on medium or larger screens
				// md:z-10 = ensure image is in front of 'Evolve' text/image
				// md:justify-items-end = position items on right side on medium or larger screens
          className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
      </motion.div>

      {/* SPONSORS  - below header */}
      {isAboveMediumScreens && (
				// h-[150px] = exactly 150 pixels
        <div className="h-[150px] w-full bg-primary-100 py-10">
					{/* mx-auto =  center in div */}
					{/* w-5/6 = width 5/6 of div */}
          <div className="mx-auto w-5/6">
						{/* items-center justify-between = center items in div with equal space between them */}
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img alt="redbull-sponsor" src={SponsorRedBull} />
              <img alt="forbes-sponsor" src={SponsorForbes} />
              <img alt="fortune-sponsor" src={SponsorFortune} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;