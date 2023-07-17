import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      {/* mx-auto w-5/6 = 5/6th of page width, centered in container */}
      {/* use flex for page sizes medium and above */}
      {/* gap-16 = gap between elements */}
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        {/* md:mt-0 = top margin of 0 for page sizes medium and above */}
        <div className="mt-16 basis-1/2 md:mt-0">
          {/* basis-1/2 = use 1/2 width of container/div */}
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        {/* basis-1/4 = use 1/4 width of container/div */}
        {/* md:mt-0 = top margin of 0 for page sizes medium and above */}
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;