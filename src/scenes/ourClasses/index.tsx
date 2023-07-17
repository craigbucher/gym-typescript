import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

// array of class information:
// to add class, just add info here:
// const classes: Array<Object> = [		<== better to define object items, instead (icon: JSX.Element, etc.)
// in this case, we'll define 'ClassType' in types.ts and use it here
const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image6,
  },
];

// set typescript types:
type Props = {
	// function that doesn't return anything = void
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
		// id="ourclasses" = for anchor link smooth scroll
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
				// change color in 'Our Classes' text in navbar:
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
				{/* Title and additional text move in from left:  */}
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}	// run once 50% of container/div is visible
          transition={{ duration: 0.5 }}	// = 0.5 seconds
          variants={{
            hidden: { opacity: 0, x: -50 },	// invisible and to the left
            visible: { opacity: 1, x: 0 },	// visible and in final position
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
        </motion.div>
				{/* Display list of classes with scrollbar: */}
				{/* h=[353px] = height of exactly 353 pixels */}
				{/* overflow-x-auto overflow-y-hidden = gives us the scrollbar */}
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
					{/* w-[2800px] = width of exactly 2800px = larger than parent container, so need scrollbar */}
					{/* whitespace-nowrap = no leftover whitespace, only images next to each other */}
          <ul className="w-[2800px] whitespace-nowrap">
						{/* map through all classes in 'classes' array (above) */}
						{/* "'item: ClassType' is optional, but recommended" */}
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}	// React requires a unique key for list items
                name={item.name}	// from 'classes' array, above
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;