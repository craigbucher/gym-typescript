import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";	// SelectedPage type
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

// "This is the most confusing and hardest part of the application"

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
	const flexBetween = "flex items-center justify-between";
	// items-center = aligns vertically
	// justify between = pushes items to opposite sides of row
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");	// breakpoint = 1060px
  // background color = top of page: none/empty; anywhere else: primary-100
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
	
	return (
    <nav>
      <div
			// outer-most div = entire width of page
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      // fixed top-0 = fixed at the top, will always stay there when scrolling down
			// z-30 = ensure that it's always on top (z-index)
			>
				{/* inner div = 5/6th the width, divided into two parts */}
				{/* mx-auto = centers it in the parent div */}
				{/* ${flexBetween} = "flex items-center justify-between" from above */}
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE - logo */}
            <img alt="logo" src={Logo} />

            {/* RIGHT SIDE - menu items */}
						{/* responsive, based on screen size: */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
								{/* left side of div = links */}
                <div className={`${flexBetween} gap-8 text-sm`}>
									{/* gap-8 = space between, without having to set margins */}
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
								{/* right side of div = 'Sign In' and 'Become A Member' buttons */}
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
							// below breakpoint, collapse to menu icon
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
				// below breakpoint and when menu toggled:
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* fixed = always in same place; right-0 = right side; z-40 = ensure on top of everything */}
					{/* bottom-0 and h-full = takes up full height of page */}
					{/* w-[300px] = exactly 300 pixels in tailwind */}
					{/* CLOSE ICON - tip right */}
					{/* flex = entire width; justify-end = rightmost */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
						{/* ml-[33%] = left margin exactly 33% of width */}
						{/* flex and flex-col = display vertically */}
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;