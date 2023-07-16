import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  // typescript function to set SelectedPage that returns nothing (void)
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      // passing in 'ContactUs' from enum (shared/types)  Why specify ContactUs if will be re-used?????
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      {/* 'children' = content inside button */}
      {children}
    </AnchorLink>
  );
};

export default ActionButton;