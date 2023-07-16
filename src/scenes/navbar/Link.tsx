import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

// typescript requires type definition of props:
type Props = {
  page: string;
  selectedPage: SelectedPage;
	// setSelectedPage is a function that doesn't return anything
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
	// convert page name to lower case and remove spaces:
	// required because we're going to also use this as the classname and
	// page id:
  // 'as' = treat this as a 'SelectedPage' enum (because otherwise wouldn't match anything in enum list)
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
			// If this link/page is the current page, display it in a different color:
      // when hovering, 500ms tranistion to hover color
			className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300
      `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}	// set 'SelectedPage' state to this page
    >
			{/* {page} comes from props, above */}
      {page}
    </AnchorLink>
  );
};

export default Link;