import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

// why not just define this in the <motion.div>, below???
const childVariant = {
  hidden: { opacity: 0, scale: 0.9 }, // 0 opacity = invisible, 90% scale
  visible: { opacity: 1, scale: 1 },
};

//typescript type definitions:
type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVariant} // defined, above
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
    >
      <div className="mb-4 flex justify-center">
        {/* circle with icon inside: */}
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {/* 'icon' from props: */}
          {icon}
        </div>
      </div>

      {/* 'title' and 'decription' from props */}
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      {/* 'Learn More' link: (same as home page) */}
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  );
};

export default Benefit;